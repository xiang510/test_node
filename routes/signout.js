var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;
/* GET home page. */
router.get('/', checkNotLogin,function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
