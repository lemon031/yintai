

function Stairs(selector){
	this.ele = $(selector).get(0);
	this.isClick = false;
	this.stairClick();
	this.scrollAction();
}
//滚动时确定楼层
Stairs.prototype.scrollAction = function(){
	var oSelf = this;
	$(window).scroll(function(){
		$(oSelf.ele).find('.first').each(function(index){
			console.log($(oSelf.ele).offset().top);
			// console.log($(this).offset().top);
			if($(window).scrollTop()+ $(oSelf.ele).find('.first').eq(0).height()>=$(this).offset().top && oSelf.isClick == false){
				$(oSelf.ele).find('.stairs li span').removeClass().eq(index).addClass('stairsSelect');	
			}
			//判断超过对应位置隐藏楼梯
			if($(window).scrollTop()+$(oSelf.ele).find('.first').eq(0).height()<=$(oSelf.ele).find('.first').eq(0).offset().top){
					$('.stairs').css('display','none');
					// $(oSelf.ele).addClass('stairs1')
			}else{
                $('.stairs').css('display','block');
			}
		})	
	})	
}
//点击楼层时去对应的楼层
Stairs.prototype.stairClick = function(){	
	var oSelf = this;
	$(oSelf.ele).find('.stairs li').on({
		click:function(){
			oSelf.isClick = true;
			$(oSelf.ele).find('span').removeClass();
			$(this).find('span').addClass('stairsSelect');
			var index = $(this).index();
			$('html,body').animate({
				scrollTop:index * $(oSelf.ele).find('.first').eq(0).height()+$(oSelf.ele).offset().top
			},function(){
				oSelf.isClick = false;
			});
		}
	})
	//返回顶部
	$(oSelf.ele).find('.stairs p').click(function(){
		$('html,body').animate({
			scrollTop:0
		})
	})
}
