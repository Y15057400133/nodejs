
const PositionDao=require("../dao/position-dao.js");
const PositionService={
//添加职位的方法
add:function(req,res,next){
//获取请求中传递的信息
const{position,company,salary,address,worktite,experience}=req.body;	
let logo ="";
if(req.file)
logo = "/imgages/upload/"+req.file.filename;
//保存数据到数据库
PositionDao.save({logo,position,company,salary,address,worktite,experience})
           .then(function(data){
			res.json({
				res_code:1,
				res_error:"",
				res_body:{
				status:1,
				message:"添加成功",
				data:data
				}
			});	 
			})   
			 
			 
			   
		     
                 
}


	
};




//导出模块
module.exports=PositionService;