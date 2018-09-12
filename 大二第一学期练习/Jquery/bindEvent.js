$(document).ready(function(){
    // $("#clickMeBtn").click(function(){
    //      alert("hello");
    // });
    //绑定两个事件
    $("#clickMeBtn").bind("click",clickHandler1);
    $("#clickMeBtn").bind("click",clickHandler2);
    //解除事件绑定
    $("#clickMeBtn").unbind("click");
//on、off效果与bind和unbind相同
    $("#clickMeBtn").on("click",clickHandler1);
    $("#clickMeBtn").on("click",clickHandler2);
    //解除事件绑定
    $("#clickMeBtn").off("click");
});

//在控制台打印
function clickHandler1(e){
	console.log("clickHandler1");
}
function clickHandler2(e){
	console.log("clickHandler2");
}