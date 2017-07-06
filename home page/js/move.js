//获取样式
function getStyle(obj, attr) {
	//获取样式对象
	var styleObj = obj.currentStyle || getComputedStyle(obj, null);
	//返回对应的样式值
	return styleObj[attr]; 
}

function move(obj, attrObj, callback) {
		//清除之前的定时器
		clearInterval(obj.timerID);
		//接收新的定时器的返回值ID
		obj.timerID = setInterval(function(){
			//假设所有的属性都达到了目标值
			//标志位法
			var flag = true;
			
			//遍历对象
			for(var attr in attrObj){
				
				if(attr == 'opacity'){
					var current = Math.round(getStyle( obj ,attr ) * 100);
				}else{
					var current = parseInt(getStyle( obj , attr ));
				}
				
				var speed = (attrObj[attr] - current) / 10;
				speed = speed > 0 ?Math.ceil(speed) : Math.floor(speed);
				
				//所有的属性都要达到目标值
				//有任何一个没达到，都不能停止定时器
				if(attrObj[attr] != current){
					//假设错误
					flag = false;
					
				}
				
				if(attr == 'opacity'){
					
					obj.style[attr] = (current + speed) / 100;
					obj.style.filter = 'alpha(opacity=' + (current + speed) + ')';
				}else{
					obj.style[attr] = current + speed + 'px';
				}
				
			}
			
			//如果flag为真，说明所有的属性都达标了，假设正确
			if(flag){
				clearInterval(obj.timerID);
				
				if(callback){
					callback();
				}
				
				return;
			}
			
			
		},30);


}