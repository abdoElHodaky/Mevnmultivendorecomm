// includes
import './includes/dotenv.js';

// core
import app from './app.js';
import dbConnect from './db.js';
import routersLoader from './routers/index.js';
import { up } from './seeds/push1.js';

// init
dbConnect();
routersLoader(app);
if(process.env.MODE === 'development') up();

// start server
app.listen(8400, () => console.log('server is up'));