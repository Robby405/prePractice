$(document).ready(function(){
	// $("#btn1").click(function(){
 //        alert("text:"+$("#text").text());//输出this is my webpage这是一个a标签		
	// });
	// 	$("#btn1").click(function(){
 //        alert("text:"+$("#text").html());	//输出this is my webpage<a>这是一个a标签</a>	
	// });
	$("#btn1").click(function(){
        alert("text:"+$("#it").val());//输出this is my webpage这是一个a标签		
	});
	$("#btn2").click(function(){
        alert("text:"+$("#aid").attr("href"));//输出this is my webpage这是一个a标签		
	});
});