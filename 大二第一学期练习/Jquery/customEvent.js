var clickMeBtn;

$(document).ready(function(){
	clickMeBtn=$("#clickMeBtn");
	$("clickMeBtn").click(function(){
		var e=jQuery.Event("MyEvent");
		$("#clickMeBtn").trigger(e);
	});
	$("#clickMeBtn").bind("MyEvent",function(event){
		console.log(event);
	})
});