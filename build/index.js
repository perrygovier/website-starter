"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compress = require("compression");
const express = require("express");
const helmet = require("helmet");
const config_1 = require("./config");
const app = express();
app.use(compress());
app.use(helmet());
app.enable('etag');
app.get('/', function (req, res) {
    res.send('<h1>Hi there</h1>');
});
app.listen(config_1.PORT, function () {
    // Render some console log output
    console.log('Listening on port ' + config_1.PORT);
});
