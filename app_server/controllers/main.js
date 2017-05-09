var path = require('path');
var dao = require("../modules/dao.js");

module.exports.index = function(err, res) {
    //console.log(" in index");
    res.sendFile(path.resolve('app_server/views/index.html'));
};

module.exports.test = function(err, res) {
    //console.log("in dao test function");
    dao.test(function (data) {
        console.log(data);
        res.send(data);
    });
};

module.exports.cart = function(err, res) {
    console.log("cart");
    res.send("hallllooooo");
    //res.sendFile(path.resolve('app_server/views/index.html'));
};

