import apiRouter from "./api.js";

const routersLoader = (app) => {
    // api
    app.use('/api/v1', apiRouter);
    // handle 404
    app.all('*', (_, res)=>{
        return res.render('404', {
            layout: 'main'
        });
    });
};

export default routersLoader;