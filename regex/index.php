<?php
/*$str = <<<HEREDOC
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>
    <a class="class-1" datatype="dsadas" href="AHREFA-1">2</a>
    <a href="AHREFA-2">2</a>
    <a class="class-1" href="AHREFA-3">2</a>
</div>
</body>
</html>
HEREDOC;*/

/*$str = 'Danylo  is         321     very     wise';

$res = preg_split('/\s+/', $str);*/

/*$res1= preg_match_all('/a(n|\s)/',$str,$matches);*/
/*$res1= preg_match_all('/a./',$str,$matches);*/
/*$res1= preg_match_all('/[^\s][\S]\s{2,4}\w/',$str,$matches);*/
/*$res1 = preg_match_all('/<a\s+[^>]*?href\s*=\s*"([^>]+?)"/', $str, $matches);*/
$str = '/controller/url/other/page/white/black';
$res1= preg_match_all('/\/(?!page)[^\/]+/',$str,$matches);
var_dump($matches);

