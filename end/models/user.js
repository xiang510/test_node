var User = require('../data').user;



var saveMsg = function (data){

    var user = new User(data)
    user.save(function(err,res){
        if(err){
            console.log('ERR '+err)
        }
    })
} 

module.exports = {
    saveMsg
}



