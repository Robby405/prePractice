$(document).ready(function(){
   $("#btn1").click(function(){
      $("#p1").text("极客学院");//修改p标签里面的内容
   });
   $("#btn2").click(function(){
      $("#p2").html("<a href='http://www.jikexueyuan.com'>极客学院</a>");//修改p标签为a标签
   });
   $("#btn3").click(function(){
      $("#i3").val("极客学院");//修改input元素内容
   });
   // $("#btn4").click(function(){
   //    $("#aid").attr("极客学院");//修改input元素内容
   // });
   //改变多个值
   $("#btn4").click(function(){
      $("#aid").attr({
      	"href":"http://www.jikexueyuan.com",
      	"title":"hello"
      });
  });
  
   $("#btn5").click(function(){
      $("#p5").text(function(i,ot){
      	return "old:"+ot+" new:这是新的内容"+(i);
      });
   
   });
});