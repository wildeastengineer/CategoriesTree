var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var registerRoutes = require('./routes');
var errorHandler = require('./errorHandler');

app.use(bodyParser());

registerRoutes(app, express.Router());

app.use(errorHandler);

app.listen(config.port, function () {
    console.log('Example app listening on port ' + config.port + '!');
});
