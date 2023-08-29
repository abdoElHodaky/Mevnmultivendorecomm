import AppError from "../parts/AppError.js";

const inputsValidation = async (validationSchema, inputs, next) => {

    let valid = false

    try {

        await validationSchema.validate(inputs, {abortEarly: false});
        valid = true;

    } catch (err) {

        next(new AppError({message: 'input errors', overload: 'err.errors'}, 400));
    }

    return valid;
};

export default inputsValidation;