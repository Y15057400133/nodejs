require(["../config"],function(){
require(["swiper","bootstrap","header"],function(Swiper){
class Slideshow{
constructor(){
  this.init();
}	
init(){
// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
loop: true, // 循环模式选项
// 如果需要分页器
pagination: {
	el: '.swiper-pagination',
},
// 如果需要前进后退按钮
navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
}
})        	
}	
}	

new Slideshow();	
});	
})