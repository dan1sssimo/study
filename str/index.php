<?php

$str = ' Danylo top chel ';
//strlen($str);
$downStr = 'chel';
/*$data =  strpos($str,$downStr);
$data =  strrpos($str,$downStr);
$data =  stripos($str,$downStr);
$data =  strripos($str,$downStr);*/


/*$data = substr($str,strpos($str,$downStr),strlen($downStr));*/

/*$data = trim($str);*/

/*
$data = str_replace($downStr,'123',$str);*/

$data = explode(' ',$str);
var_dump($data);