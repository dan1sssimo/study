<?php

if ($_COOKIE) {
    var_dump($_COOKIE);
    setcookie('name', '', time()-10, '/'); // видалення куки
} else
    setcookie('name', 'Danylo', time()+60*60+365*10, '/');