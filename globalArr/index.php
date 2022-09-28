<?php
var_dump($_REQUEST);
/*if ($_FILES['file']['size'] == 7145)
    var_dump($_FILES);
*/?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>HTML Document</title>
</head>
<body>
<form action="" method="get" enctype="multipart/form-data">
    <input type="text" name="name" value="">
    <input type="file" name="file">
    <input type="submit" name="sub">
</form>
</body>
</html>