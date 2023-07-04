import { create } from 'express-handlebars';

import manifist from '../../public/website/manifest.json' assert { type: 'json' };

let jsFileUrl = 'http://localhost:3000/website/main.js';
let cssFileUrl = 'http://localhost:3000/website/style.css';

if(process.env.MODE !== 'development') {
    jsFileUrl = `/website/${manifist['main.js'].file}`;
    cssFileUrl = `/website/${manifist['main.css'].file}`;
}

// handlebars ins
const hbs = create({
    extname: '.hbs',
    helpers: {
        jsFileUrl: () => {
            return jsFileUrl;
        },
        cssFileUrl: () => {
            return cssFileUrl;
        }
    }
});

export default hbs;