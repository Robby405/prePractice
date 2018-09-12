$(document).ready(function(){
   $("body").bind("click",bodyHandler);
   $("div").bind("click",divHandler1);
   $("div").bind("click",divHandler2);
});

function bodyHandler(event){
	console.log(event);//不是所有的浏览器都支持
}
function divHandler1(event){
	console.log(event);
//	event.stopPropagation();//只有body事件
	event.stopImmediatePropagation();
}

function divHandler2(event){
	conlog(event);
//	event.stopPropagation();//只有body事件
	event.stopImmediatePropagation();//阻止所有
}

function conlog(event){
     console.log(event);//写成一个方法，浏览器不支持时，直接注销
}