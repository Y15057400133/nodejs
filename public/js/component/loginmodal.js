//定义模块
define(["jquery","bootstrap"],function(){
function Loginmodal(){
	this.createDom();
	this.login();
}
Loginmodal.template=`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	<h4 class="modal-title" id="myModalLabel">Modal title</h4>
  </div>
  <div class="modal-body">
	<form class="login-form">
<div class="form-group hidden nothing">
    <p Style="background:red;" >用户登录失败</p>
  </div>	
	
  <div class="form-group">
    <label for="exampleInputEmail1">用户名</label>
    <input type="text" class="form-control" name="username" id="exampleInputEmail1" placeholder="请输入用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="请输入密码">
  </div>
	<div class="form-group form-p hidden">
	<p Style="background:red;" >密码错误</p>
	</div>
  
	
	
</form>
  </div>
  <div class="modal-footer">
	<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	<button type="button" class="btn btn-primary loginbtn">登录</button>
  </div>
</div>
</div>
</div>`;	
	
//在原型链上扩展方法
$.extend(Loginmodal.prototype,{
createDom(){
$("body").append(Loginmodal.template);	
},
login(){
$(".loginbtn").on("click",this.loginIncident)	
},
loginIncident(){
// const url ="http://rap2api.taobao.org/app/mock/124733/api/users/login.do", 假接口
const url ="/api/users/login.do",
	  data=$(".login-form").serialize();//表单序列化
$.post(url,data,(res)=>{
console.log(res);
if(res.res_body.status === 0){
$(".nothing").removeClass("hidden");
$(".form-p").removeClass("hidden");
}else{
let username = res.res_body.data.username;
sessionStorage.setItem("userlogin",username);
$("#myModal").modal("hide");
window.location.reload();
}	
},"json");
}
})
	
return Loginmodal;	
})