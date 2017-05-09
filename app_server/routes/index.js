var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main');

/* GET home page. */
router.get('/',     ctrlmain.index);
router.get('/test', ctrlmain.test);
router.get('/cart', ctrlmain.cart);

module.exports = router;