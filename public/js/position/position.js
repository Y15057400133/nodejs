require(["../config"],function(){
require(["template","bootstrap","header","jquery"],function(template){
class Position{
constructor(){
  this.init(); 
   this.createTr();
   this.loadPage();
   this.paginationClick();
   this.aAmendclick();
   this.showModal();
}	
init(){
$(".position").addClass("active").siblings().removeClass("active");	
}	
createTr(){
$(".addbtn2").on("click",this.addbtnTr);	
}
//添加岗位
addbtnTr(){
//请求数据接口，post请求
// const url = "http://rap2api.taobao.org/app/mock/124733/api/positions/add.do";
const url = "/api/positions/add.do";
// const data =$(".increase-form").serialize();
//异步上传二进制文件
const formdata = new FormData($(".increase-form")[0]);
$.ajax({
url:url,
type:"post",
data:formdata,
contentType:false, //不使用默认的类型
processData:false,  //不处理data数据对象
success:(res)=>{
console.log(res);
}
})
}
//接收页码 默认第一页，请求数据，
loadPage(page=1){
const url ="http://rap2api.taobao.org/app/mock/121892/incress";
$.getJSON(url,(res)=>{
 const html = template("list-template",{list:res.res_body.data});
 $(".list-tbody").html(html);
})
}
//页码事件
paginationClick(){
let _this =this;
$(".pagination").on("click","a",function(){
const page = $(this).text();
let $li=$(this).parent();
$li.addClass("active").siblings().removeClass("active");
_this.loadPage(page);	
});
}
aAmendclick(){
$(".table-bordered").on("click",".amend",function(){
let $Tr=$(this).parent().parent();
const _id=$Tr.data("id"),
    logo=$Tr.find(".logo").attr("src"),
	  position=$Tr.find(".position").text(),
	  company=$Tr.find(".company").text(),
	  experience=$Tr.find(".experience").text(),
	  worktite=$Tr.find(".worktite").text(),
	  address=$Tr.find(".address").text(),
	  salary=$Tr.find(".salary").text();  
	  
	  // console.log(_id);
   $("#logospan").text(logo);	  
	 $(".position").val(position);
	 $(".company").val(company);
	 $(".experience").val(experience);
	 $(".worktite").val(worktite);
	 $(".address").val(address);
	 $(".salary").val(salary);
	 

	  
	
})	
}

showModal(){
	
	
}

	
}
new Position();
})	
})