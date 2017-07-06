
function Zoomnode(selector){
	this.ele=$(selector).get(0);
	this.zoom();
//	console.log(this.ele)
}
Zoomnode.prototype.zoom=function(){
//	console.log($(this.ele).find('.main_hide'));
	var oself=this;
	$(oself.ele).find('.main_hide').on({
		'mouseenter mouseleave':function(){
//			console.log(1);
			$(oself.ele).find('.main_select,.main_big').toggle();
		},
		'mousemove':function(e){
			var left=e.offsetX-$(oself.ele).find('.main_select').width()/2;
			var top=e.offsetY-$(oself.ele).find('.main_select').height()/2;
			if(left<=0){
				left=0;
			}else if(left>$(this).width()-$(oself.ele).find('.main_select').width()){
				left=$(this).width()-$(oself.ele).find('.main_select').width();
			}
//			console.log($(oself.ele).find('.main_select').height());
//			console.log($(this).height());
			if(top<=0){
				top=0;
			}else if(top>$(this).height()-$(oself.ele).find('.main_select').height()){
				top=$(this).height()-$(oself.ele).find('.main_select').height();
			}
			//修改移动框的位置
			$(oself.ele).find('.main_select').css({
				left:left,
				top:top
			})
			//修改大图的放大的位置
			var num=768/360;
			console.log(num)
//			var numWidth=$(this).width()/$(oself.ele).find('.main_select').width();
//			var numHeight=$(this).height()/$(oself.ele).find('.main_select').height();
//			console.log(numWidth);
//			console.log(numHeight);
			$(oself.ele).find('.main_big').css({
				backgroundPositionX:-left*num,
				backgroundPositionY:-top*num
			})
		}
	})
}