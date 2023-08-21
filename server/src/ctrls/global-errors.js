const globalErrors = (err, req, res, next) => {

    err.status = err.status || 500;
    err.overload = err.overload || undefined;

    if(err.overload) {

        yupValidation(err, res);
    } else if(err.message.includes('Cast to ObjectId')) {

        return res.status(err.status).send({errMsg: 'valid_id_required'});
    } else {

        return res.status(err.status).send({errMsg: err.message});
    }
};

const yupValidation = (err, res) => {

    return res.status(err.status).send({'input_errors': {
        msg: err.message,
        fields: err.overload
    }});
};

export default globalErrors;