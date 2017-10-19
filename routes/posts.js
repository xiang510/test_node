var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {
  res.render('posts');
});

module.exports = router;
