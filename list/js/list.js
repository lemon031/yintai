$(function(){
    //悬浮顶部
    $(window).scroll(function(){
        // console.log($('.main_bt').offset().top);
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()>$('.main_bt').offset().top+30){
            $('.main_bt1').css('display','block');
        }else{
            $('.main_bt1').css('display','none');
        }
    })
    //返回顶部
    $('.backTop').click(function(){
        // console.log(1)
        $('html,body').animate({
            scrollTop:0
        })
    })
    //价格排序
    var lengthLI=$('.main_bc1 li').length;
    var temp=null;
    // console.log(lengthLI);
    var num=0;
    $('.priceSort').click(function(){
        num++;
        for(var i=0;i<lengthLI-1;i++){
            for(var j=0;j<lengthLI-i-1;j++){
                // console.log($('.main_bc1 li').eq(j).find('.price').html());
                if(num%2==0){
                    if(Number($('.main_bc1 li').eq(j).find('.price').html())>Number($('.main_bc1 li').eq(j+1).find('.price').html())){
                        // console.log(1);
                        temp=$('.main_bc1 li')[j+1].innerHTML;
                        $('.main_bc1 li')[j+1].innerHTML=$('.main_bc1 li')[j].innerHTML;
                        $('.main_bc1 li')[j].innerHTML=temp;
                    }
                }else{
                    if(Number($('.main_bc1 li').eq(j).find('.price').html())<Number($('.main_bc1 li').eq(j+1).find('.price').html())){
                        // console.log(1);
                        temp=$('.main_bc1 li')[j+1].innerHTML;
                        $('.main_bc1 li')[j+1].innerHTML=$('.main_bc1 li')[j].innerHTML;
                        $('.main_bc1 li')[j].innerHTML=temp;
                    }
                }

            }
        }
    })

    //进入详情页面
    $('.main_bc1 li').click(function(){
        location.href='../details/index.html';
    })


})
