var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/FE'))

// var databaseURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/news_store';
// mongoose.connect(databaseURL);
mongoose.connect('mongodb://localhost/news_store');

require("./models/news");
var News = mongoose.model("News");

app.get('/', function(req, res){
  console.log("hello world", News)
  res.sendFile(path.join(__dirname + '/../FE/index.html'))
})






app.listen(3000);
