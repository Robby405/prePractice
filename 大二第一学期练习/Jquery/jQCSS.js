$(document).ready(function(){
  // $("div").css("width","100px");
  // $("div").css("height","100px");
  // $("div").css("background","#FF0000");
  // $("div").css({
  	// width:"100px",height:"100px",backgroundColor:"#FF0000"
  // });
  $("div").addClass("style1");
  $("div").click(function(){
  	// $(this).addClass("style2");//替换为style2样式
  	// $(this).removeClass("style1");//移除style1
  	$(this).toggleClass("style2");//在style1和style2之间来回切换
  })
});