const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/1809",{useNewUrlParser: true});
//用户数据结构
const userSchema=new mongoose.Schema({
username:String,
password:String,
email:String
});

//职位的数据结构
const positionSchema=new mongoose.Schema({
// 公司logo
logo:String,
// 职业类型
position:String,
// 职位名称
company:String,
// 职位资新
salary:String,
// 工作地点
address:String,
// 工作类型
worktite:String,
// 工作经验
experience:String
});

//用户 职位模块 实际生成users集合 表名
const UserModel= mongoose.model("user",userSchema);
const PositionModel = mongoose.model("position",positionSchema);
 //定义模块
 module.exports ={UserModel,PositionModel};
  
  
  
  
  
  
  
  
  