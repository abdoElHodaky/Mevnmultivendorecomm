const AsyncMiddleware = (handler) => {
    return (req, res, next) => {
        try {
            handler(req, res, next);
        } catch(ex) {
            next(ex);
        }
    }
};

export default AsyncMiddleware;