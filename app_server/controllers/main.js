var path = require('path');

module.exports.index = function(err, res) {
    res.sendFile(path.resolve('app_server/views/index.html'));
};