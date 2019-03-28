// 导入模块
const {UserModel}=require("./model.js");

//所有方法mongoosejs.com 中查询
const UserDao={
//保存
save(userinfo){
//返回promise对象
return new UserModel(userinfo).save();
},
//修改 userinfo 修改后用户对象信息
update(userinfo){
const condition={_id:userinfo._id};//条件 返回结果
	return UserModel.update(condition,userinfo);
},
//查找 obj condition 查询对象  返回结果
find(condition){
return UserModel.find(condition);
},
//删除obj
delete(condition){
return UserModel.remove(condition);	
}
	
};

//定义模块
module.exports=UserDao;
