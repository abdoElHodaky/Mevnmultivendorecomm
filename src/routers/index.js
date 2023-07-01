import pagesRouter from "./pages.js";
import apiRouter from "./api.js";

const routersLoader = (app) => {
    // web pages
    app.use('/', pagesRouter);
    // api
    app.use('/api', apiRouter);
};

export default routersLoader;