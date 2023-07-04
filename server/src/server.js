// includes
import './includes/dotenv.js';

// core
import app from './app.js';

// init
import routersLoader from './routers/index.js';

// parts
routersLoader(app);

// start server
app.listen(8400, () => console.log('server is up'));