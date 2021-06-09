var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({cwd:'app'}) 
    .include('routes')
    .into(app);
module.exports = app;