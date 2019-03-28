define(['jquery'],function(){
function Register(){
this.createDOM();	
this.registerbtn();
}
Register.template=`<!-- 注册模态框 -->
<div class="modal fade" id="regesert" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	<h4 class="modal-title" id="myModalLabel">Modal title</h4>
  </div>
  <div class="modal-body">
	<form class="register-form">
	<div class="form-group hintfriam hidden">
	<p Style="background:red">密码不一致</p>
	</div>
	
  <div class="form-group">
    <label for="exampleInputEmail1">注册</label>
    <input type="text" class="form-control" name="username" id="exampleInputEmail1" placeholder="输入注册名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control input1" name="password" id="exampleInputPassword1" placeholder="输入密码">
  </div>
  <div class="form-group">
  <label for="exampleInputEmail1">确认密码</label>
  <input type="password" class="form-control input2" id="exampleInputEmail1" placeholder="请确认密码">
  </div>
	
<div class="form-group">
  <label for="exampleInputEmail1">邮箱</label>
  <input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="输入邮箱">
  </div>
	
</form>
  </div>
  <div class="modal-footer">
	<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	<button type="button" class="btn btn-primary registerbtn">注册</button>
  </div>
</div>
</div>
</div>`;

$.extend(Register.prototype,{
createDOM(){
$("body").append(Register.template);	
},
registerbtn(){
$(".registerbtn").on("click",this.registerIncident);	
},
registerIncident(){
//密码相同，再请求数据
if($(".input1").val()===$(".input2").val()){
// const url ="http://rap2api.taobao.org/app/mock/124733/api/users/login.do",
const url ="/api/users/register.do",
      data =$(".register-form").serialize(); //表单序列化 要有name值
$.post(url,data,(res)=>{
console.log(res);	
//判断响应状态码 
if(res.res_body.status === 0){
// window.location.reload();
// alert("注册失败");
}else{
let data ={
"name":res.res_body.username,
"password": res.res_body.token 	
};
//数据永久存储在本地
localStorage.setItem("data",data);
$("#regesert").modal("hide");
$(".form-control").val("");
if(confirm("注册成功，去登录吧n(*≧▽≦*)n")){
$("#regesert").modal("hide");	
}

}

})		
}else{
$(".hintfriam").removeClass("hidden");
$(".form-control").val("");
}	
}


	
	
})
	
return 	Register;
})