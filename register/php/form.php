<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/12 0012
 * Time: 下午 3:09
 */
header('Content-type:text/json;charset:utf-8');
class Person{
    public $username;
    public $password;
}
$person=new Person();
$person->username=$_GET['username'];
$person->password=$_GET['password'];
if(!file_exists('../json/register.json')){
    $registerArr=array();
    array_push($registerArr,$person);
}else{
    $registerArr=json_decode(file_get_contents('../json/register.json'));
    foreach ($registerArr as $item){
        if ($person->username==$item->username){
            die(json_encode(array('result'=>'此用户已注册')));
        }else{
            array_push($registerArr,$person);
        }
    }
}
$jsonString=json_encode($registerArr);
$result=file_put_contents('../json/register.json',$jsonString);
if ($result){
    echo json_encode(array('result'=>'注册成功,请登陆'));
}else{
    echo json_encode(array('result'=>'注册失败'));
}
