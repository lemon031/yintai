$(function(){
	$(".one_go").click(function(){	
//		alert(1)
		$('.denglu').fadeOut(function(){
			$('.zhuce').fadeIn()
		});
	})
	$('.zhuce_back').click(function(){
		$('.zhuce').fadeOut(function(){
			$('.denglu').fadeIn()
		})
	})
	$('.main_rt1').click(function(){
		$('.two,.three').fadeOut(function(){
			$('.one').fadeIn()
		})
	})
	$('.main_rt2').click(function(){
		$('.one,.three').fadeOut(function(){
			$('.two').fadeIn()
		})
	})
	$('.main_rt3').click(function(){
		$('.two,.one').fadeOut(function(){
			$('.three').fadeIn()
		})
	})
	onload=function(){
		$('.three').hide()
	}
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/gi;
	var passwordPattern=/^\w{6,12}$/gi;
	var passswordBoolean=true;
	var usernameBoolean=true;
	var zhuceName=null;
	var zhucePassword1=null;
    var zhucePassword2=null;
	$('.zhuce .username').blur(function(){
        zhuceName=$(".username")[2].value;
		// console.log(zhuceName);
        if(!pattern.test(zhuceName)){
            usernameBoolean=false;
            alert('请输入手机号');
        }
    })
    $('.zhuce .password1').blur(function(){
        zhucePassword1=$('.password1').val();
		// console.log(zhucePassword1);
        if(!passwordPattern.test(zhucePassword1)){
            passswordBoolean=false;
            alert('请输入6-12位的字母和数字');
        }
    })
    $('.zhuce .password2').blur(function(){
        zhucePassword2=$('.password2').val();
//		console.log(str);
        if(!zhucePassword1==zhucePassword2){
            passswordBoolean=false;
            alert('确认密码输入错误');
        }
    })
	$('.zhuceButton').click(function(){
		if(passswordBoolean&&usernameBoolean){
			$.ajax({
				url:'php/form.php',
				data:{
					username:zhuceName,
					password:zhucePassword1
				},
				dataType:'json',
				async:true,
				success:function(date){
					alert(date.result);
				},
				error:function(xhr){
					console.log(xhr.responseText);
				}
			})
		}
	})
	var dengluName1=null;
	var dengluBoolean=null;
    $('.one .username').blur(function(){
        dengluName1=$(".one .username").val();
        if(!pattern.test(dengluName1)){
            usernameBoolean=false;
            alert('请输入手机号');
        }else{
        	$.ajax({
                url:'php/form2.php',
                data:{
                    username:dengluName1,
                },
                dataType:'json',
                async:true,
                success:function(date){
                    // console.log(1);
                	if(passwordPattern.test(date.result)){
                		// console.log(1);
                        dengluBoolean=true;
                		$('.one .password').val(date.result);
					}else{
                        alert(date.result);
					}
                },
                error:function(xhr){
                    console.log(xhr.responseText);
                }
			})
		}
    })
	$('.denglu1').click(function(){
        // console.log(dengluBoolean);
        // console.log(pattern.test(dengluName1));
        if(dengluBoolean){
			// location.href("../home page/index.html");
			$('.denglu1 a').attr('href','../home page/index.html');
        }
	})






})
