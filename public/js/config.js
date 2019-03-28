require.config({
baseUrl:"/",
paths:{
"jquery":"libs/jquery/jquery-1.12.4.min",
"bootstrap":"libs/bootstrap/js/bootstrap.min",
"swiper":"libs/swiper/js/swiper.min",
"header":"js/component/header",
"login":"js/component/loginmodal",
"register":"js/component/registermodal",
"template":"libs/art-template/template-web"
},
shim:{
//不遵循AMD规范的模块垫片
	"bootstrap":{
	deps:["jquery"]
	}
}
	
});