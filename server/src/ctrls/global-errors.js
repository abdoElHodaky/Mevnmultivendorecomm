const globalErrors = (err, req, res, next) => {

    err.status = err.status || 500;
    err.overload = err.overload || undefined;

    if(err.overload) {
        isYupValidation(err, res);
    } else {
        return res.status(err.status).send({errMsg: err.message});
    }
};

const isYupValidation = (err, res) => {
    return res.status(err.status).send({'input_errors': {
        msg: err.message,
        fields: err.overload
    }});
};

export default globalErrors;