import express from "express";
import { create } from 'express-handlebars';

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
app.use(express.static('public'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './src/views');

export default app;