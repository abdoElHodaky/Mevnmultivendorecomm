import { object, string } from "yup";
import bcryptjs from "bcryptjs";

import User from "../../models/user.js";
import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";
import inputsValidation from "../../utils/inputsValidation.js";
import { createToken } from "../../utils/jwtAuth.js";
import AppError from "../../parts/AppError.js";

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

    await inputsValidation(signUpSchema, req.body, next);

    const user = new User({...req.body, email: { address: req.body.email }});

    const newUser = await user.save();

    const token = createToken(newUser._id);

    res.status(200).send({ data: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        accountStatus: newUser.accountStatus,
        avatar: newUser.avatar,
        currentBalance: 0,
        appPreferences: newUser.appPreferences,
        _id: newUser._id,
        createdAt: newUser.createdAt,
    }, token });

});

const signIn = AsyncMiddleware(async(req, res, next) => {

    await inputsValidation(signInSchema, req.body, next);

    const user = await User.findOne({'email.address': req.body.email});
    if(!user) return next(new AppError({message: 'wrong_email_password'}, 400));

    const compareResult = await bcryptjs.compare(req.body.password, user.password);
    if(!compareResult) return next(new AppError({message: 'wrong_email_password'}, 400));

    const token = createToken(user._id);

    res.status(200).send({ data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountStatus: user.accountStatus,
        avatar: user.avatar,
        currentBalance: 0,
        appPreferences: user.appPreferences,
        _id: user._id,
        createdAt: user.createdAt,
    }, token });

});

export { signUp, signIn };