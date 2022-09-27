<?php
$date = $_POST["date"];
var_dump($date);
$date = strtotime($date);
$endYear = 365 - date('z',$date);
echo 'До кінця року залишилось ' . $endYear . ' днів.';

