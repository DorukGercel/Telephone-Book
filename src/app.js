const express = require('express');
const app = express();
const {PersonRoutes} = require("./routes");
const config = require("./configs");
const load = require("./loaders");

config();
load();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log(`Currently listening port ${process.env.APP_PORT}`);
    app.use("/person", PersonRoutes);
})