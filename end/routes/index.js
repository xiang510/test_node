var express = require('express');
var router = express.Router();

var login = require('../controller').login;
var register = require('../controller').register;


/* USER. */
router.post('/api/login', function(req, res, next) {
  res.json({
    'state':'OK',
    'msg':'登陆成功'
  })
});

router.post('/api/register',register,function(req,res,next){

  res.json({
    'state':'OK',
    'msg':'注册成功'
  })
  
});
module.exports = router;

