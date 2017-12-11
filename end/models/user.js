var User = require('../data').user;



var saveMsg = function (data,next){

    var user = new User(data);
    user.save(function(err,res){
        if(err){
            console.log('ERR '+err);
        }else {
            console.log('RES '+res);
            next();
        }
    });
} 
var checkInfo = function(data,req,res,next){
    var wherestr = {'username':data.username};
    User.findOne(wherestr,function(err,doc){
        if(err){
            console.log('ERR '+ err);
        }else if(doc){
            res.json({
                state:0,
                msg:'用户名已存在'
            });
        }else {
            saveMsg(data,next);
        }
    });

}

module.exports = {
    checkInfo
}



