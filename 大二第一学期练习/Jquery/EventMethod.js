//判断文档是否加载完毕
$(document).ready(function(){
 //   $("button").click(function(){
 //   $("button").dblclick(function(){//双击隐藏
 //   $("button").mouseenter(function(){//放上鼠标隐藏
 	$("button").mouseleave(function(){//鼠标离开隐藏
    	$(this).hide();
    });
});