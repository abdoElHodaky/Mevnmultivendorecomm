/**
 * 
 * All guarded routes must use sendRes.withRefreshToken(req, res)
 * 
 */

import apiRouter from "./api.js";
import websiteRouter from "./website.js";

const routersLoader = (app) => {
    // api
    app.use('/api/v1', apiRouter);
    // website
    app.use('/', websiteRouter);
};

export default routersLoader;