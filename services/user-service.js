// 用户相关业务逻辑层
const UserDao=require("../dao/user-dao.js");
const UserService={
login:function(req,res,next){
//post 请求数据在body中  从请求中传递数据  req.query get请求传递的数据
//自动转json文本  拿到数据操作服务器
	const{username,password,email}=req.body;
	
//从数据库查询用户信息，然后比对密码
UserDao.find({username}).then(function(data){
	console.log(data);
// 恰好有一个用户满足这个条件
if(data.length===1){
//判断密码相同 登录成功
	if(data[0].password === password){
			res.json({
				res_code:1,
				res_error:"",
				res_body:{
				status:1,
				message:"登录成功",
				data:{
					username:username
				}
				}
			});	
}else{
	res.json({
		res_code:1,
		res_error:"",
		res_body:{
		status:0,
		message:"登录失败，密码错误",
		data:{}
		}
	});			
}

}else{
res.json({
	res_code:1,
	res_error:"",
	res_body:{
	status:0,
	message:"用户名已存在",
	data:{}
	}
});				
	
}	
	
	
})
},//login 注册逻辑
register:function(req,res,next){
//post 请求数据在body中  从请求中传递数据  req.query get请求传递的数据
//自动转json文本  拿到数据操作服务器
	const{username,password,email}=req.body;
//从数据库查询用户信息，然后看数据长度 
UserDao.find({username}).then(function(data){
	console.log(data);
// 大于0 说明注册过
if(data.length>0){	
	res.json({
		res_code:1,
		res_error:"",
		res_body:{
		status:0,
		message:"用户名已存在",
		data:{}
	      }
	});	
}else{
//没有注册过，就保存数据 调用user-dao save方法
UserDao.save({username,password,email}).then(function(data){
res.json({
	res_code:1,
	res_error:"",
	res_body:{
	status:1,
	message:"注册成功",
	data:data
	}
});				

})
}	

})
	
}//register


};
//定义模块
module.exports=UserService;