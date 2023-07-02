// core
import app from './src/app.js';

// init
import routersLoader from './src/routers/index.js';

// parts
routersLoader(app);

// start server
app.listen(8400, () => console.log('server is up'));