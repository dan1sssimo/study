<?php

namespace task2;

class Task2
{
    protected $arr = array(); // можемо звертатися в дочірніх класах

    public function __construct($arraySize)
    {
        for ($i = 0; $i < $arraySize; $i++) {
            $this->arr[$i] = rand(0, 100);
        }
    }

    public function showArray()
    {
        echo 'Згенерований масив: ';
        foreach ($this->arr as $item)
            echo " " . $item;
        echo "\n";
    }

    public function maxNumber()
    {
        $i = 0;
        $arr = $this->arr;
        $max = null;
        while ($i < count($this->arr)) {
            if ($arr[$i] > $max or $max === null)
                $max = $arr[$i];
            $i++;
        }
        return $max;
    }

    public function minNumber()
    {
        $i = 0;
        $arr = $this->arr;
        $min = null;
        while ($i < count($this->arr)) {
            if ($arr[$i] < $min or $min === null)
                $min = $arr[$i];
            $i++;
        }
        return $min;
    }

    public function evenNumber()
    {
        $arr = $this->arr;
        echo 'Усі парні числа: ';
        for ($i = 0; $i < count($this->arr); $i++) {
            if ($arr[$i] % 2 == 0) {
                echo ' ' . $arr[$i];
            }
        }
        echo "\n";
    }

    public function oddNumber()
    {
        $arr = $this->arr;
        echo 'Усі непарні числа: ';
        for ($i = 0; $i < count($this->arr); $i++) {
            if ($arr[$i] % 2 !== 0) {
                echo ' ' . $arr[$i];
            }
        }
        echo "\n";
    }

    public function divisibleByFour()
    {
        $arr = $this->arr;
        echo 'Усі числа, що діляться на 4 націло: ';
        for ($i = 0; $i < count($this->arr); $i++) {
            if ($arr[$i] % 4 == 0) {
                echo ' ' . $arr[$i];
            }
        }
        echo "\n";
    }

    public function sumOfMaxAndMin()
    {
        $sum = $this->maxNumber() + $this->minNumber();
        echo 'Сума максимального і мінімального числа: ' . $sum;
        echo "\n";
    }
}

$test = new Task2(4);
$test->showArray();
$maxNumber = $test->maxNumber();
echo "Максимальне число у масиві: $maxNumber" . "\n";
$minNumber = $test->minNumber();
echo "Мінімальне число у масиві: $minNumber" . "\n";
$test->evenNumber();
$test->oddNumber();
$test->divisibleByFour();
$test->sumOfMaxAndMin();
//У браузері використав би <br> замість "\n"
