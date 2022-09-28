<?php
session_start();
$_SESSION['res']=array('1'=>'1','2'=>'2');

var_dump($_SESSION);
