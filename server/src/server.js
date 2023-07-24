// includes
import "./includes/dotenv.js";

// core
import app from "./app.js";
import dbConnect from "./db.js";
import routersLoader from "./routers/index.js";
import { up } from "./seeds/push1.js";
import globalErrors from "./ctrls/global-errors.js";
import loadDocs from "./docs/docs-loader.js";

// extras
import cors from "cors";

// --- start-init --------------------------------------------------------- //

// 1- cors for developing (before-all-routes)
if(process.env.MODE === 'development') app.use(cors());

// 2- connect to mongo database
dbConnect();
// and seed some data for developing
if(process.env.MODE === 'development') up();

// 3- load api docs
loadDocs(app);

// 4- load all routes
routersLoader(app);

// 5- global error ctrl
app.use(globalErrors);

// --- end-init --------------------------------------------------------- //

// start server
app.listen(8400, () => console.log('server is up'));