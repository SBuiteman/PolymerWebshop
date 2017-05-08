var mongojs = require("mongojs");
var db = mongojs('localhost:27017/polymerWebshop', ['products']);
var ObjectId = require('mongodb').ObjectID;

// var router = express.Router();

var async = require('async');

var express = require('express');
var app = express();
var serv = require('http').createServer(app);
var path = require('path')

//database acces object, alle db functions staan in deze file
var dao = require("./app_server/modules/dao.js");
var index = require('./app_server/routes/index');

app.use(express.static('public'))

// app.set('views', path.join(__dirname, 'app_server', 'views'));

app.use('/', index);

serv.listen(2100);
console.log("server started");
