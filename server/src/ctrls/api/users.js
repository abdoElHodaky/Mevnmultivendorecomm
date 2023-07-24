import { object, string } from "yup";

import User from "../../models/user.js";
import AsyncMiddleware from "../../middleware/AsyncMiddleware.js";
import inputsValidation from "../../utils/inputsValidation.js";
import { createToken } from "../../utils/jwtAuth.js";

const signUpSchema = object({
    firstName: string().required('user_fname_required'),
    lastName: string().required('user_lname_required'),
    email: object({
        address: string()
        .required('user_email_required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        'user_email_not_valid')
    }),
    password: string().required('user_password_required')
});

const signUp = AsyncMiddleware(async(req, res, next) => {

    await inputsValidation(signUpSchema, req.body, next);

    const user = new User(req.body);

    const newUser = await user.save();

    const token = createToken(newUser._id);

    res.status(200).send({data: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        accountStatus: newUser.accountStatus,
        avatar: newUser.avatar,
        currentBalance: 0,
        appPreferences: newUser.appPreferences,
        _id: newUser._id,
        createdAt: newUser.createdAt,
    }, token});

});

export { signUp };