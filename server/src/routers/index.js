import apiRouter from "./api.js";
import websiteRouter from "./website.js";

const routersLoader = (app) => {
    // api
    app.use('/api', apiRouter);
    // website
    app.use('/', websiteRouter);
};

export default routersLoader;