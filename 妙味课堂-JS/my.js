function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
function doMove(obj,attr,dir,target,endFn){
		dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
		clearInterval(obj.timer);

		obj.timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+dir;
			//设置临界值
			if(speed>target&&dir>0||speed<target&&dir<0){
				speed=target;
			}
			obj.style[attr]=speed+'px';
			if(speed==target){
				clearInterval(obj.timer);
			}
		},100);
		endFn&&endFn();
}
function opacity(obj,end,time,endFn){
		clearInterval(obj.timer1);
		obj.timer2=setInterval(function(){
				opa=parseInt(getStyle(obj,'opacity'));
				if(opa<end){
					opa+=0.1;
				}else if(opa>end||opa>=1){
					opa-=0.1;
				}
				
				obj.style.opacity=opa;
			
		},time);
		endFn&&endFn();
	}