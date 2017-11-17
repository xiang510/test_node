
var login =  function login(req,res,next){
    //params  name string
    //params  password number
    
    if(req.params.length === 2){
        console.log(req.params);
        next();
    }else {

        res.json({
            'state':0,
            'errormsg':'用户名和密码输入不正确'
        })
    }
}

var register = function register(req,res,next){
    console.log(req.params);
}

module.exports = {
    login,
    register
}