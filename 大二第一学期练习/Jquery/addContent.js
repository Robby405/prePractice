//append在所选元素之后进行插入
//prepend在所选元素之前进行插入
//before在所选元素之前进行插入,但是插入的内容在原来内容的前一行
//after在所选元素之后进行插入,但是插入的内容在原来内容的后一行
$(document).ready(function(){
    $("#btn1").click(function(){
        // $("#p1").append("this is my webpage,");
        $("#p1").prepend("this is my webpage,");
    });

    $("#btn2").click(function(){
       // $("#p2").before("this is my add content");
        $("#p2").after("this is my add content");
    });
});


//添加元素
function appendText(){
	//可添加三种内容，html,jQuery,DOM
	var text1="<p>iwen</p>";
	var text2=$("<p></p>").text("ime");
	var text3=document.createElement("p");
	text3.innerHTML="acely";
	$("body").append(text1,text2,text3);
}