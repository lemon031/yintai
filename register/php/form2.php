<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 12:13
 */
header('Content-type:text/json;charset:utf-8');
//echo file_get_contents('../json/regiter.json');
$boolean=true;
if(!file_exists('../json/register.json')){
    echo json_encode(array('result'=>'该用户未注册'));
}else{
    $registerArr=json_decode(file_get_contents('../json/register.json'));
    foreach ($registerArr as $item){
        if ($_GET['username']==$item->username){
            $boolean=false;
            die(json_encode(array('result'=>$item->password))) ;
        }
    }
}
if($boolean){
    echo json_encode(array('result'=>'该用户未注册'));
}