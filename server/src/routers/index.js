import pagesRouter from "./pages.js";
import apiRouter from "./api.js";

const routersLoader = (app) => {
    // api
    app.use('/api', apiRouter);
    // website
    app.use('/', pagesRouter);
};

export default routersLoader;