import express from "express";

const app = express();

// customize app
app.use(express.static('public'));

export default app;