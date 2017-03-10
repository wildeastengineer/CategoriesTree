var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var registerRoutes = require('./routes');

app.use(bodyParser()); // get information from html forms

registerRoutes(app, express.Router());

app.listen(config.port, function () {
    console.log('Example app listening on port ' + config.port + '!');
});
