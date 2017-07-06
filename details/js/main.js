$(function(){
	//放大镜
	var zoom=new Zoomnode('.main_zoom');
	//轮播图
	var oCarousel=new Ocarousel('.main_clm');

    // console.log($('.buy'));
    // console.log(1);

    $('.buy').click(function () {
        $.ajax({
			url:'php/details.php',
			data:{
				username:$('.username').html(),
				price:$('.price').html(),
				num1:$('.num1').html()
			},
			dataType:'json',
			async:true,
			success:function(data){
				// console.log(date.result);
				if(data.result){
                    // console.log(1);
                    location.href ='../cart/index.html';
				}
			},
			errer:function(xhr){
				console.log(xhr.responseText);
			}
		})
    })
    $('.cart').click(function () {
        $.ajax({
            url:'php/details.php',
            data:{
                username:$('.username').html(),
                price:$('.price').html(),
                num1:$('.num1').html()
            },
            dataType:'json',
            async:true,
            success:function(data){
                // console.log(date.result);
                if(data.result){
                    // console.log(1);
                    location.href='../cart/index.html';
                }
            },
            errer:function(xhr){
                console.log(xhr.responseText);
            }
        })
    })
    // $('.plus').click(function(){
    //     console.log($('num').html());
    //     // $('num').html()=;
    // })

	
})
