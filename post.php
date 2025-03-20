<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

if (!empty($name) && !empty($phone)) {
    echo "Имя: " . $name . "<br>";
    echo "Телефон: " . $phone;
} else {
    echo "Ошибка: Поля 'Имя' и 'Телефон' не могут быть пустыми.";
}

?>