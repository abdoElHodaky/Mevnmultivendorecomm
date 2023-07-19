import AppError from "../parts/AppError.js";

const inputsValidation = async (validationSchema, inputs, next) => {

    try {
        await validationSchema.validate(inputs, {abortEarly: false});
    } catch (err) {
        return next(new AppError({message: 'input errors', overload: err.errors}, 400));
    }

};

export default inputsValidation;