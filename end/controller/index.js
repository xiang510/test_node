
var saveMsg = require('../models/user').saveMsg;
var checkInfo = require('../models/user').checkInfo;

var login = function login(req, res, next) {
    //params  name string
    //params  password number

    if (req.params.length === 2) {
        console.log(req.params);
        next();
    } else {

        res.json({
            'state': 0,
            'errormsg': '用户名和密码输入不正确'
        })
    }
};

var register = function register(req, res, next) {
    if (req.body.username && req.body.password) {
        var nowdate = Date.now();
        var regInfo = {
            username:req.body.username,
            userpass:req.body.password,
            date:nowdate
        }
        //检查数据是否存在
        checkInfo(regInfo,req,res,next);
        

    } else {
        res.json({
            'state':0,
            'msg':'注册信息不正确'
        })
    }

};

module.exports = {
    login,
    register
}