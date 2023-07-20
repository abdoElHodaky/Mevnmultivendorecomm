// includes
import "./includes/dotenv.js";

// core
import app from "./app.js";
import dbConnect from "./db.js";
import routersLoader from "./routers/index.js";
import { up } from "./seeds/push1.js";
import globalErrors from "./ctrls/global-errors.js";
import loadDocs from "./docs/docs-loader.js";

// init
dbConnect();
loadDocs(app);
routersLoader(app);
if(process.env.MODE === 'development') up();

// global error ctrl
app.use(globalErrors);

// start server
app.listen(8400, () => console.log('server is up'));