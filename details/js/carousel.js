function Ocarousel(selector){
	this.ele=$(selector).get(0);
	this.moveAction();
//	console.log(1)
}
Ocarousel.prototype.moveAction=function(){
	$.each($(this.ele).find('li'),function(i,n){
		$(this.ele).find('li').eq(i).css('left',i*70);
	})
	$(this.ele).find('.main_left').click(function(){
//		console.log(1)
		if(!$(this.ele).find('li').is(':animated')){
			console.log(1)
			$(this.ele).find('ul').prepend('li:last-child');
			$(this.ele).find('li:first-child').css('left',-70);
			$(this.ele).find('li').animate({
//				console.log($(this.ele).find('li').position())
				left:$(this.ele).find('li').position().left+70
			},1000);
		}
	})
	$(this.ele).find('.mian_right').click(function(){
		console.log(1)
		if(!$(this.ele).find('li').is(':animated')){
			$(this.ele).find('ul').prepend('li:first-child').clone();
			$(this.ele).find('li:last-child').css('left',455);
			$(this.ele).find('li').animate({
				left:$(this.ele).find('li').position().left-70
			},1000);
			setTimeout("$(this.ele).find('li:first-child').remove()",1000);
		}
	})
//	$(this.ele).find('.main_left').click(function(){
//		$(this.ele).find('ul').css({
//			console.log($(this.ele).find('ul').offset);
////			left:$(this.ele).find('ul').left-70;
//		})
//	})





}
