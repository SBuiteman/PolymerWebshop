var path = require('path');
var doa = require('../modules/dao.js')

module.exports.index = function(err, res) {
    res.sendFile(path.resolve('app_server/views/index.html'));
};

module.exports.test = function(err, res) {
   doa.test(function (data) {
       console.log(data);
       res.send(data);
   });
};