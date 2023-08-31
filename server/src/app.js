import express from "express";
import cookieParser from "cookie-parser";

import { __dirname, join } from "./utils/paths.js";

// handlebars view engine
import hbs from "./parts/hbs.js";

// create an express app and customize it
const app = express();
app.use(cookieParser( process.env.COOKIE_SIGNATURE ));
app.use(express.json());
app.use(express.static(join(__dirname, '../../public')));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', join(__dirname, '../views'));

export default app;