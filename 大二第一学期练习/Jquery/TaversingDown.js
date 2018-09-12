/*
children只表示它的下一级，且可以无参数
find函数表示指定的级数的样式，必须有参数
*/
$(document).ready(function(){
//    $("#div1").children().css({border:"3px solid red"});
    $("#div1").find("a").css({border:"3px solid red"});
});