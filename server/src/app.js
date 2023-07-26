import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cookieParser from "cookie-parser";

// handlebars view engine
import hbs from "./parts/hbs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// create an express app and customize it
const app = express();
app.use(cookieParser( process.env.COOKIE_SIGNATURE ));
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', join(__dirname, './views'));

export default app;