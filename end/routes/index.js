var express = require('express');
var router = express.Router();
var mycontrol = require('../controller');

/* USER. */
router.post('/api/login', mycontrol.checkUser, function(req, res, next) {
  res.json({
    'state':'OK',
    'msg':'登陆成功'
  })
});

router.post('/api/register',function(req,res,next){

  res.json({
    'state':'OK',
    'msg':'注册成功'
  })
  
});
module.exports = router;

