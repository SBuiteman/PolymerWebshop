var path = require('path');

var dao = require("../modules/dao.js");

module.exports.index = function(err, res) {
    //console.log(" in index");
    res.sendFile(path.resolve('app_server/views/index.html'));
};

module.exports.findAllProducts = function(err, res) {
    dao.findAllProducts(function (data) {
        console.log("products = " + data);
        res.send(data);
    });
};

module.exports.findAllCategories = function(err, res) {
    dao.findAllCategories(function (data) {
        console.log("categories = " + data);
        res.send(data);
    });
};

module.exports.cart = function(err, res) {
    console.log("cart");
    //res.sendFile(path.resolve('app_server/views/index.html'));
};