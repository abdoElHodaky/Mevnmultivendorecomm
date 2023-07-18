const globalErrors = (err, req, res, next) => {

    err.status = err.status || 500;

    res.status(err.status).send({errMsg: err.message});
};

export default globalErrors;