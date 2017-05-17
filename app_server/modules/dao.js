var mongojs = require("mongojs");
var db = mongojs('localhost:27017/polymerWebshop', ['products']);
var ObjectId = require('mongodb').ObjectID;

var async = require('async');

module.exports.findAllProducts = function (cb) {
    db.products.find({}, function (err, products) {
        if (products.length > 0) {

            async.forEach(products, function (product, callback) {
                db.categories.find({ "_id": ObjectId(product.categorie) }, function (err, categorieName) {
                    console.log("cat = " + categorieName[0].categorie);
                    product.categorie = categorieName[0].categorie;
                    callback();
                });

            }, function () {
                console.log(products);
                //socket.emit('deckReturn', deck);
                cb(products);
            });


        }
    });
}

module.exports.findAllCategories = function (cb) {
    db.categories.find({}, function (err, res) {
        if (res.length > 0) {
            cb(res);
        }
    });
};

module.exports.getCardRace = function (raceId, cb) {
    db.races.find({ _id: raceId }, function (err, res) {
        if (res.length > 0) {
            cb(res);
        }
    });
}