module.exports = function(app){
  // app.get('/',function(req,res){
  //   res.redirect('/posts');
  // });
  // app.use('/home',require('./home'));
  // app.use('/users',require('./users'));
  //var checkLogin = require('../middlewares/check').checkLogin;
  //app.use('/signin',require('./signin'));
  app.use('/signup',require('./signup'));
  //app.use('/signout',require('./signout'));
  app.use('/posts',require('./posts'));

}