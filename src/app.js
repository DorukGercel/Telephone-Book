const express = require('express');
const app = express();
const config = require("./config");
const load = require("./loaders");

config();
load();

app.listen(process.env.APP_PORT, () => {
    console.log(`Currently listening port ${process.env.APP_PORT}`);
})