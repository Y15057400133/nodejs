// 定义模块
define(["login","register","jquery"],function(Loginmodal,Register){
function Header(){
	this.createDOM();
	this.loginOK();
	this.logout();
}	

Header.template = `<nav class="navbar navbar-inverse">
 
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      
      <a class="navbar-brand" href="#">拉钩网管理系统</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">首页<span class="sr-only">(current)</span></a></li>
        <li class="position"><a href="/html/position.html">职业管理</a></li>
      </ul>
      
      <ul class="nav navbar-nav navbar-right loginULblock">
        <li id="loginbtn" data-toggle="modal" data-target="#myModal"><a href="#">登录</a></li>
		    <li data-toggle="modal" data-target="#regesert"><a href="#">注册</a></li>
      </ul>
			
			<ul class="nav navbar-nav navbar-right hidden loginUL">
				<li><a href="#" Style="color:red">欢迎您:</a></li>
		    <li class="logout"><a href="#">注销</a></li>
			</ul>
			
			
    </div><!-- /.navbar-collapse -->
	</nav>`;
$.extend(Header.prototype,{
//创建dom元素
createDOM(){
$("header").html(Header.template);	
},
createModal(){
new Loginmodal();
new Register();
},
loginOK(){
//本地回话存储userlogin，最大5mb 会话结束，删除
const user = sessionStorage.getItem("userlogin");
if(user){
$(".loginUL").removeClass("hidden").siblings(".loginULblock").addClass("hidden");
//有破坏性，，end（）回到最近的一次破坏性之前的节点 回到ul，.end();
$(".loginUL").find("a:first").text("欢迎您："+user);
}else{
//创建模态框
this.createModal();
}
},
//注销事件
logout(){
$(".logout").on("click",this.logoutIncident);
},
logoutIncident(){
if(confirm("确定注销吗？")){
sessionStorage.removeItem("userlogin");
window.location.reload();
}
}

	
	
});	
	
	
return new Header();	
});