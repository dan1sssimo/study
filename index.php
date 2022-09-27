<?php
/*//Lesson 2

//task1
function pr($arr)
{
    echo "<pre>";
    print_r($arr);
    echo "</pre>";

}

$arr = array('');
$b = 100;
$x = 0;
function CheckPairing($b, $x)
{
    for ($a = 50; $a <= $b; $a++) {
        if ($a % 2 !== 0) {
            $x++;
        }
    }
    return $x;
}

$test = CheckPairing($b, $x);
echo "Всього непарних чисел: $test";

//task2

function FindAnswer()
{
    $x = (15 + 37 * 11) / (95 + (21 / 2));
    return $x;
}

$test2 = FindAnswer();
echo "Відповідь: $test2";

//task3
function GenerateCalendar($days, $firstDay)
{
    $arrDays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
    for ($i = 0; $i < count($arrDays); $i++) {
        if ($firstDay == $arrDays[$i]) {
            $start = $i;
        }
    }
    if (isset($start)) {
        for ($b = $start; $b <= $days + $start; $b++) {
            $day = $b % 7;
            $calendarArr[] = $arrDays[$day];
        }
        foreach ($calendarArr as $key => $value) {
            echo "<br>День тижня $key, число $value";
        }
    } else {
        echo "Ввведено не правильний день тижня";
    }
    return 0;
}

$test3 = GenerateCalendar(31, 'Вівторок');
echo $test3;*/

//Lesson3
//Парсинг

/*$url = 'https://www.google.com/';
$res = file_get_contents($url);*/
/*print_r($res);*/

/*$curl = curl_init();
curl_setopt($curl,CURLOPT_URL, $url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER, 1);
$res = curl_exec($curl);
print_r($res);

preg_match('#<title>(.*?)</title>#su',$res,$matches);
$title = $matches[1];
print_r($matches);*/

/*function GetData($text, $limit1, $limit2)
{
    $pos = strpos($text, $limit1);
    if ($pos === false)
        return false;
    else {
        $pos += strlen($limit1);
        $text = substr($text, $pos);

        $pos = strpos($text, $limit2);
        if ($pos === false)
            return false;
        else
            $text = substr($text, 0, $pos);
    }
    return $text;
}
$test5 = GetData($res, "<title>", "</title>");
print_r($test5);*/

// Task1

/*$arr1 = array('111');
$arr2 = array('123');
$arr3 = array('Ada');
$arr4 = array('Ziz');
$arr5 = array('323');
$arr6 = array('adsadasdasdas');
$newArray = (array_merge($arr1, $arr2, $arr3, $arr4, $arr5, $arr6));
for ($i = 0; $i < count($newArray); $i++) {
    if (mb_strtolower(strrev($newArray[$i])) == mb_strtolower($newArray[$i])) {
        echo "<br>Фраза $newArray[$i] паліндром";
    } else
        echo "<br>Фраза $newArray[$i] не паліндром";
}*/

// Task3
/*$size = 8;
$startNum = 1;
$arr[][] = '';
for ($i = 0; $i < $size; $i++) {
    for ($j = 0; $j < $size; $j++) {
        $arr[$i][$j] = $startNum;
        if ($j == 0)
            echo "<br>";
        echo " " . $arr[$i][$j];
        $startNum = $startNum * 2;
    }
}*/

// Task4
/*$url1 = array('https://www.google.com/');
$url2 = array('https://www.google.com/intl/ru/gmail/about/');
$url3 = array('https://www.apple.com/');
$newArray = array_merge($url1, $url2, $url3);
$arr_time_parse = array('');
$arr_sites_stat = array('');
foreach ($newArray as $key => $site) {
    $start = microtime(true);
    $res = file_get_contents($site);
    $time = (microtime(true) - $start) * 10000;
    $arr_sites_stat['site'][$key] = $key;
    $arr_sites_stat['time_parse'][$key] = $time;
    $arr_time_parse[$key] = $time;
    $arr_sites_stat['site_name'][$key] = $site;
    $file = fopen("$key.txt", 'a');
    fwrite($file, $res);
    fclose($file);
}
asort($arr_time_parse);
pr($arr_sites_stat);
foreach ($arr_time_parse as $key => $time) {
    $site = $arr_sites_stat['site'][$key];
    $site_name = $arr_sites_stat['site_name'][$site];
    echo "<br>$site - $site_name - $time";
}*/

//Lesson 4
//form ajax
