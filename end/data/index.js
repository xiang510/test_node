
var Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/myproject');

/**
  * 连接成功
  */
Mongoose.connection.on('connected', function () {    
    console.log('sucess');  
}); 

/**
 * 连接异常
 */
Mongoose.connection.on('error',function (err) {    
    console.log('error');  
});

var Schema = Mongoose.Schema;
    

var User = new Schema({
    username:String,
    userpass:Number,
    date:Date
});


module.exports = {
    user:Mongoose.model('Users',User)
};




