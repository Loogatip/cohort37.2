/*
* Задание 1. Even/Odd
 - Создайте ф-цию, которая определяет парность числа
   - Функция должна принимать целое число
     Если число не целое - скруглить его в меньшую сторону
   - Функция должна вернуть строку 'even' если число четное
   - Функция должна вернуть строку 'odd' если число не четное
*/

function even_odd (number) {
    number=Math.floor(number);
    return number % 2 === 0 ? "even" : "odd";
    }
console.log(even_odd(34.2));