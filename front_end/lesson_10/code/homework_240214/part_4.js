/*
* Задание 4.  Простые числа в заданном промежутке
- Нужно создать две функции.
  - Первая функция должна принимать число и возвращать результат булевого типа, 
    является ли число простым или нет. 
    Число является простым, если оно делиться без остатка только на 1 и само на себя.
  - Вторая функция должна вернуть в виде массива
    все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
  - Вторая функция должна пользоваться первой функцией для определения простых чисел.
  - Первая функция не должна быть колбеком, просто рядом лежать, 
    или даже внутри второй функции. На ваш выбор.
*/

function simpleOrNot(number){
    if(number <= 1){
        return false;
    }
    for (let i=2; i<number; i++) {
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
function find(n){
    const simpleNumbers = [];
    for(let i=2; i<=n; i++){         
        if(simpleOrNot(i)){
           simpleNumbers.push(i);
        }
    }
    return simpleNumbers;
}
console.log(simpleOrNot(0));
console.log(find(17));