const db = require('../models');
const initData = {content: [], users: []};

db.init(initData);

const checkUser = function(req, res, next) {
    console.log(req.body.params);
    var userInfo = {name:req.body.params};
    if (!db.get('user',userInfo)) {
        res.json({
            status:0,
            errMsg:'该用户不存在'
        });
        return;
    }
    next();
}
const login = function (req, res, next) {

}
module.exports =  {
    checkUser,
    login
}
