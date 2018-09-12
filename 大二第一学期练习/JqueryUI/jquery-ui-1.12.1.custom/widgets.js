$(document).ready(function(){
   $("#accordion").accordion();
   
   // 自动补全
   var autotags=['iwen','ime','html','css','javascript','java','android','ios'];
   $("#tags").autocomplete({
   	source:autotags
   });

   // 时间选择框
   $("#datepicker").datepicker();

   //对话框
   $("#btn").button();
   $("#btn").on("click",function(){
   	  $("#div").dialog();
   });
});