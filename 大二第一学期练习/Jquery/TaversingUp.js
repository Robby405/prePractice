/*
parent()只能指向向上一级
parents()指向上面所有级的元素
parentsUntil()指向所选择的区间
*/
$(document).ready(function(){
   // $("a").parent().css({border:"3px solid red"});
   // $("a").parents().css({border:"3px solid red"});
   $("a").parentsUntil("#div1").css({border:"3px solid red"});
});