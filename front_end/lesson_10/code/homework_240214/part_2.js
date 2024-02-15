/*
* Задание 2.  Стрелочная ф-ция возводящая число в квадрат
- Создайте ф-цию, которая возвращает квадрат числа
  - Функция должна принимать целое число
    Если число не целое - скруглить его в меньшую сторону
  - Функция должна вернуть квадрат этого числа
*/

// const universal = (number,f) => {
//     number=Math.floor(number);
//     return f(number);
// }
// console.log(universal(7.72, number=> number**2));


// разбор на уроке:

const universal = (number) => {
  number=Math.floor(number);
  return number ** 2;
}
console.log(universal(4.99));