var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var registerRoutes = require('./routes');
var errorHandler = require('./errorHandler');

app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-origin, content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

registerRoutes(app, express.Router());

app.use(errorHandler);

app.listen(config.port, function () {
    console.log('Example app listening on port ' + config.port + '!');
});
