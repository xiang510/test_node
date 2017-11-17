var express = require('express');
var router = express.Router();

var login = require('../controller').login;
var register = require('../controller').register;

var saveMsg = require('../models/user').saveMsg;

/* USER. */
router.get('/api/login', function(req, res, next) {

  var data = {
    username:'xiangc',
    password:123456,
    date:'2017-11-17 15:11:00'
  }
  saveMsg(data);
  res.json({
    'state':'OK',
    'msg':'登陆成功'
  })
});

module.exports = router;
