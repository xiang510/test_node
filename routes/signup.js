var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;
var checkLogin = require('../middlewares/check').checkLogin;
var controler = require('../controler');
/* GET home page. */
router.get('/',checkNotLogin,function(req, res, next) {
  res.render('signup');
});
router.post('/',checkNotLogin,controler.signup);
module.exports = router;
