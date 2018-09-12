var myjq=$.noConflict();
myjq(document).ready(function(){
  myjq("#btn").on("click",function(){
     myjq("div").text("new Hello");
  });
});