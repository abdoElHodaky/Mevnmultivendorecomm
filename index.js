import express from "express";

const app = express();

app.get('/', (_, res) => {
    res.send('app is up 1');
});

app.listen(8400, () => {
    console.log('app is up');
});