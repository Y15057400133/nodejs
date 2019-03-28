// 导入模块
const {PositionModel}=require("./model.js");

//所有方法mongoosejs.com 中查询
const PositionDao={
//保存职位信息
save(positioninfo){
//返回promise对象
return new PositionModel(positioninfo).save();
},
//修改 userinfo 修改后用户对象信息
update(userinfo){
const condition={_id:userinfo._id};//条件 返回结果
	return PositionModel.update(condition,userinfo);
},
//查找 obj condition 查询对象  返回结果
find(condition){
return PositionModel.find(condition);
},
//删除obj  通常删除修改，以主键判断查找
delete(condition){
return PositionModel.remove(condition);	
}
	
};

//定义模块
module.exports=PositionDao;
