<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/14 0014
 * Time: 下午 1:15
 */
header('Content-Type:text/json;chartset:utf-8');
echo json_encode(file_get_contents('../../details/json/details.json'));
