$(function(){
    // console.log(1);
    var commodityObj=null;
    $.ajax({
        url:'php/cart.php',
        // data:{
        //
        // },
        dataType:'json',
        async:true,
        success:function(data){
            // console.log(data);
            commodityObj=JSON.parse(data);
            console.log(commodityObj);
            console.log(commodityObj[0].num);
            $('.oEmpty').empty();
            for(var i = 0;i<commodityObj.length;i++){
                $('.main_bmb').append('<ul class="have"></ul>');
                $('.have').append('<li><input type="checkbox"/></li>');
                $('.have').append('<li>'+commodityObj[0].username+'</li>');
                $('.have').append('<li>'+commodityObj[0].price+'</li>');
                $('.have').append('<li>'+commodityObj[0].num+'</li>');
                $('.have').append('<li>'+(commodityObj[0].price*2)+'</li>');
                $('.have').append('<li>删除</li>');
                $('.have').find('li:last').click(function(){
                    // console.log(1);
                    $('.have').empty();
                })
            }
        },
        errer:function(xhr){
            console.log(xhr.responseText);
        }
    })
})
