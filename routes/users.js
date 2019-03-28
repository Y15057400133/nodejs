
var express = require('express');
var router = express.Router();
//引入userservice中定义的模块
const UserService=require("../services/user-service.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// api/users/login.do 目录前缀设置在app.js中 尾部在假接口路径
//调用定义在user-service中的UserService的login方法
router.post('/login.do',UserService.login);

//调用定义在user-service中的UserService的resgister方法
router.post('/register.do',UserService.register);

//调用定义在user-service中的UserService的UserService.logout方法
// router.get('/logout.do',UserService.logout);

module.exports = router;
