$(document).ready(function(){
   $("#div").resizable();//调整尺寸

   $("#btn").button();//选择
   $("#select").selectable();
   $("#btn").on("click",function(){
   	if($("#right").hasClass("ui-selectee ui-selected")){
   		alert("恭喜你答对了！");
   	}
   });

   $("#sortable").sortable();//列表中调换位置
});