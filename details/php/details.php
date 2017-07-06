<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/14 0014
 * Time: 上午 11:13
 */
header('Content-Type:text/json;charset:utf-8');
class Commodity{
    public $username;
    public $price;
    public $num;
}
$commodity=new Commodity();
$commodity->username=$_GET['username'];
$commodity->price=$_GET['price'];
$commodity->num=$_GET['num1'];
if (!file_exists('../json/details.json')){
    $detailsArr=array();
    array_push($detailsArr,$commodity);
}else{
    $detailsArr=json_decode(file_get_contents('../json/details.json'));
    foreach ($detailsArr as $item){
        if (!$commodity->username==$item){
            array_push($detailsArr,$commodity);
        }
    }
}
$jsonString=json_encode($detailsArr);
$result=file_put_contents('../json/details.json',$jsonString);
//echo $result;
if ($result){
    echo json_encode(array('result'=>'true'));
}else{
    echo json_encode(array('result'=>'false'));
}