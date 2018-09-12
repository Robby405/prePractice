$(document).ready(function(){
   $(".main>a").click(function(){
   	// alert("点击了");
   	var ulNode=$(this).next("ul");
   	// if(ulNode.css("display")=="none"){
   	// 	ulNode.css("display","block");
   	// }else{
   	// 	ulNode.css("display","none");
   	// }
   	
   	//ulNode.show();
   	//ulNode.hide();
    // ulNode.toggle("normal");//数字、slow、normal、fast
   
    // ulNode.slideDown();
    // ulNode.slideUp();
    ulNode.slideToggle();
   });
   $(".hmain").hover(function(){
      $(this).children("ul").slideDown();
   },function(){
   	  $(this).children("ul").slideUp();
   });
});