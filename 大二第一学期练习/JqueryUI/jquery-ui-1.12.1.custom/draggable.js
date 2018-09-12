$(document).ready(function(){
	$("#div1").draggable();//拖动
	
	$("#div2").draggable();
	$("#div3").droppable();//允许放置
    
    $("#div3").on("drop",function(event,ui){
          $("#div3").text("drop事件");
    })
})