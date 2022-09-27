<?php
require_once 'pdoconfig.php';
$date1 = $_POST["date"];

$city = $_POST["city"];
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "INSERT INTO testform (date_name, city)
    VALUES ($date1, $city)";
$conn->exec($sql);


$conn = null;
