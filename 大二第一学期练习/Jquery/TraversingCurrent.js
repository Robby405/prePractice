/*
siblings()除它之外的所有元素
next()下一个元素
nextAll()下面的所有元素
nextUntil()区间,向下的
prev()上一个元素修改
preAll()上面的所有的元素修改
preUntil()上面的区间修改
*/
$(document).ready(function(){
   // $("h4").siblings().css({border:"3px solid red"});
   // $("h4").nextAll().css({border:"3px solid red"});
   // $("h4").next().css({border:"3px solid red"});
   // $("h4").nextUntil("h6").css({border:"3px solid red"});
  $("h4").prev().css({border:"3px solid red"});
});