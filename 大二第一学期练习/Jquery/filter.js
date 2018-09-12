/*
first()寻找同样元素中的第一个
last()寻找同样元素中的最后一个
eq()修改第i+1个
filter()满足标准就返回当前元素
not()除去满足条件的元素
*/
$(document).ready(function(){
   // $("div p").first().css("background-color","red");
   // $("div p").last().css("background-color","red");
   // $("div p").eq(2).css("background-color","red");
   // $("div p").filter("p").css("background-color","red");
 $("div p").not(".pClass").css("background-color","red");
});