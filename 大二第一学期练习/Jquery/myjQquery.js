$.myjq=function(){
	alert("Hello myjQuery");
}

$.fn.myjq=function(){
	$(this).text("Hello");
}