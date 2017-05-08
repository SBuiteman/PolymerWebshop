var mongojs = require("mongojs");
var db = mongojs('localhost:27017/polymerWebshop', ['products']);
var ObjectId = require('mongodb').ObjectID;

var async = require('async');

module.exports.getProduct = function (cb) {

    dao.test(function (res) {
        cb(res);
    });

}