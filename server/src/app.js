import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { create } from 'express-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// handlebars ins
const hbs = create({
    extname: '.hbs',
    helpers: {
        loud: (str) => {
            return str.toUpperCase()
        }
    }
});

// customize app
app.use('/', express.static(join(__dirname, '../public')));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', join(__dirname, './views'));

export default app;