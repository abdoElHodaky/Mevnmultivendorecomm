import { object, string } from "yup";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";
import { createHash } from 'crypto';
import bcrypt from "bcryptjs";

import User from "../../models/user.js";
import Session from "../../models/session.js";
import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";
import AppError from "../../parts/AppError.js";
import inputsValidation from "../../utils/inputsValidation.js";
import { createAccessToken, createRefreshToken } from "../../utils/jwtTokens.js";
import { createSession } from "../../utils/sessionToken.js";
import authedResponse from "../../utils/authedResponse.js";
import { refreshTokenExpireTime } from "../../utils/cookieTimers.js";

const { JWT_SECRET, ROOT_DOMAIN } = process.env;

const signUpSchema = object({
    firstName: string().required('user_fname_required'),
    lastName: string().required('user_lname_required'),
    email: string().required('user_email_required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        'user_email_not_valid'),
    password: string().required('user_password_required')
});

const signInSchema = object({
    email: string()
        .required('user_email_required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        'user_email_not_valid'),
    password: string().required('user_password_required')
});

const signUp = AsyncMiddleware(async(req, res, next) => {

    const valid = await inputsValidation(signUpSchema, req.body, next);
    if(!valid) return;

    const newUser = await User.create({...req.body, email: { address: req.body.email }});

    const sessionToken = await createSession(newUser._id, req.ip, req.headers['user-agent']);
    const accesstoken = createAccessToken(sessionToken, newUser._id);
    const refreshtoken = createRefreshToken(sessionToken);

    res.status(200).cookie('access_token', accesstoken, {
        'path': '/',
        'domain': 'localhost',
        'httpOnly': true,
        'sameSite': 'Lax',
        'signed': true
    }).cookie('refresh_token', refreshtoken, {
        'path': '/',
        'domain': 'localhost',
        'httpOnly': true,
        'expires': refreshTokenExpireTime(),
        'sameSite': 'Lax',
        'signed': true
    }).send({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        accountStatus: newUser.accountStatus,
        avatar: newUser.avatar,
        currentBalance: 0,
        appPreferences: newUser.appPreferences,
        _id: newUser._id,
        createdAt: newUser.createdAt,
    });
});

const signIn = AsyncMiddleware(async(req, res, next) => {

    const valid = await inputsValidation(signInSchema, req.body, next);
    if(!valid) return;

    const user = await User.findOne({'email.address': req.body.email});
    if(!user) return next(new AppError({message: 'wrong_email_password'}, 400));

    const compareResult = await bcryptjs.compare(req.body.password, user.password);
    if(!compareResult) return next(new AppError({message: 'wrong_email_password'}, 400));

    const sessionToken = await createSession(user._id, req.ip, req.headers['user-agent']);
    const accesstoken = createAccessToken(sessionToken, user._id);
    const refreshtoken = createRefreshToken(sessionToken);

    res.status(200).cookie('access_token', accesstoken, {
        'path': '/',
        'domain': 'localhost',
        'httpOnly': true,
        'sameSite': 'Lax',
        'signed': true
    }).cookie('refresh_token', refreshtoken, {
        'path': '/',
        'domain': 'localhost',
        'httpOnly': true,
        'expires': refreshTokenExpireTime(),
        'sameSite': 'Lax',
        'signed': true
    }).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountStatus: user.accountStatus,
        avatar: user.avatar,
        currentBalance: 0,
        appPreferences: user.appPreferences,
        _id: user._id,
        createdAt: user.createdAt,
    });
});

const profile = AsyncMiddleware(async(req, res) => authedResponse.withRefreshToken(req, res, req.user));

const logout = AsyncMiddleware(async(req, res, next) => {

    if(req?.signedCookies?.access_token) {

        const { sessionToken } = jwt.verify(req.signedCookies.access_token, JWT_SECRET);

        await Session.findOneAndDelete({token: sessionToken});

    } else if(req?.signedCookies?.refresh_token) {

        const { sessionToken } = jwt.verify(req.signedCookies.refresh_token, JWT_SECRET);

        await Session.findOneAndDelete({token: sessionToken});

    } else {

        return res.status(401).send('not_logged_in');
    }

    res.clearCookie('access_token').clearCookie('refresh_token').status(200).send('logged_out');
});

const sendVerificationMail = AsyncMiddleware(async(req, res, next) => {

    //check if the email is already verified
    if(req.user?.email?.verified) return authedResponse.withRefreshToken(req, res, 'email_already_verified');
    
    //create verify email token
    const stringToken = `${JWT_SECRET}:${req.user.email.address}`;
    const hashedToken = createHash('sha256').update(stringToken).digest('hex');
    
    //create verify email link
    const encodedEmail = encodeURIComponent(req.user.email.address);
    const link = `${ROOT_DOMAIN}:4200/store/verify-email/${encodedEmail}/${hashedToken}`;

    const testAccount = await createTestAccount();

    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    const info = await transporter.sendMail({
        from: 'develop@server.com',
        to: req.user.email.address,
        subject: 'hello',
        html: `<h1>hello</h1>
        <p>
            <a href="${link}">click to verify email</a>
        </p>`
    });

    // const viewUrl = getTestMessageUrl(info);

    return authedResponse.withRefreshToken(req, res, 'email_was_sent');
});

const verifyEmail = AsyncMiddleware(async(req, res, next) => {

    const { email, token } = req.body;

    const user = await User.findOne({'email.address': email});
    if(user?.email?.verified) return authedResponse.withRefreshToken(req, res, 'email_already_verified');

    const testHash = createHash('sha256').update(`${JWT_SECRET}:${email}`).digest('hex');
    if(testHash === token) {

        user.email.verified = true;
        await user.save();
        return authedResponse.withRefreshToken(req, res, 'email_verified_successfully');

    } else {

        return authedResponse.withRefreshToken(req, res, 'can\'t_verify');
    }
});

const changePassword = AsyncMiddleware(async(req, res, next) => {

    const user = await User.findById(req.user._id);

    const { oldPassword, newPassword } = req.body;

    const result = await bcrypt.compare(oldPassword, user.password);
    if(!result) return authedResponse.withRefreshToken(req, res, 'wrong_password');

    user.password = newPassword;
    await user.save();

    return authedResponse.withRefreshToken(req, res, 'password_changed');
});

export { signUp, 
    signIn, 
    profile, 
    logout, 
    sendVerificationMail, 
    verifyEmail, 
    changePassword};