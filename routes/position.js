var express = require('express');
var router = express.Router();
//导入模块
const PositionService=require("../services/position-service.js");
//上传文件
const multer =require("multer");
//配置路径
const path =require("path");
//磁盘存储配置
var storage = multer.diskStorage({
//目标目录   cb(null, '/tmp/my-uploads') 指在服务器端硬盘磁盘中的绝对路径，
  destination: function (req, file, cb){
    cb(null, path.join(__dirname,"../public/images/upload")) 
  },
  //文件名   file.fieldname + '-' + Date.now()  默认。文件域加上时间戳 毫秒值
  filename: function (req, file, cb){
	//截取文件后缀名
	 const ext = file.originalname.slice(file.originalname.lastIndexOf("."));
    cb(null, file.fieldname + '-' + Date.now()+ext);
  }
});
var upload = multer({ storage: storage });

//实现添加职位  post 涉及到文件一定要post请求  
//logo ：上传的文件在表单中对应元素（input）的name属性值
router.post("/add.do",upload.single('logo'),PositionService.add);
//x修改职位
// router.post("/add.do",upload.single('logo'),PositionService.update);
module.exports = router;