<?php
function pre($arr)
{
    echo "<pre>";
    var_dump($arr);
    echo "</pre>";
}

function convertToArray($string)
{
    return $convertToArray = array_map('intval', array_filter(explode(',', $string), 'is_numeric'));
}

function swapSort($arr)
{
    $count = count($arr);
    if ($count <= 1) {
        return $arr;
    } else
        for ($i = 0; $i < $count; $i++)
            for ($j = $count - 1; $j > $i; $j--)
                if ($arr[$j] < $arr[$j - 1]) {
                    $tmp = $arr[$j];
                    $arr[$j] = $arr[$j - 1];
                    $arr[$j - 1] = $tmp;
                }
    return $arr;
}

$k = 8;
$r = 1;
$str = "21,36,0,$k,3,19,125,$r,42,";

$convertedArr = convertToArray($str);
$sortedArr = swapSort($convertedArr);

echo "Початковий рядок: $str" . "\n" . "Масив: ";
foreach ($convertedArr as $arr)
    echo " " . $arr;
//pre($convertedArr);
echo "\n" . "Відсортований масив: ";
foreach ($sortedArr as $item)
    echo " " . $item;
//pre($sortedArr);

