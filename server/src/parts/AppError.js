class AppError extends Error {
    constructor({message = 'error', overload = undefined}, status) {
        super(message);

        this.status = status;
        this.overload = overload;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
};

export default AppError;