var mongojs = require("mongojs");
var db = mongojs('localhost:27017/polymerWebshop', ['products']);
var ObjectId = require('mongodb').ObjectID;

var async = require('async');

module.exports.test = function (cb) {
    db.products.find({}, function (err, res) {
        if (res.length > 0) {
            console.log("hij returned: " + res);
            cb(res);
        }
    });
}
