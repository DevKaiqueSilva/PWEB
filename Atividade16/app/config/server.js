var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({cwd:'app'}) 
    .include('routes')
    .then('config/dbConnection.js')
    .then('models')
    .into(app);
module.exports = app;