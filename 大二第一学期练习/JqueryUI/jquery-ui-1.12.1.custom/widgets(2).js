var pd;
var max=100;
var current=0;

var slider,valueSpan;
$(document).ready(function(){
     //进度条
     pd=$("#pd");
     pd.progressbar({max:100})
     setInterval(changepd,100);
 
     //菜单
     $("#menu").menu({position:{at:"left bottom"}});

     // $("#slider").slider();
     slider=$("#slider");
     valueSpan=$("#span");
     // slider.slider({
     // 	change:function(event,ui){
     // 		valueSpan.text(slider.slider("option","value"));
     // 	}
     // });
     slider.slider({
     	slide:function(event,ui){
     		valueSpan.text(slider.slider("option","value"));
     	}
     })

     $("#input").spinner();
     $("#input").spinner("value","10");
     $("#btn").on("click",function(){
          alert($("#input").spinner("value"));
     });

     $("#tabs").tabs();
});

function changepd(){
	current++;
	if(current>=100){
		current=0;
	}
	pd.progressbar("option","value",current);
}