
/*
                                    *** Функции ***
1. Получает число и возвращает это число умноженное на 2. 
   Функція называется double.
2. Получает число и возвращает квадрат числа. 
   Называется PowMe
3. Получает число, если четное умножает на 2 и возвращает результат. 
   Если не четное возвращает квадрат.
*/

const double = (number) => number*2;
const PowMe = (number) => number**2;
const evenOrNot = (number) => {
    if (number % 2 === 0){
        return double(number);
    } else {
        return PowMe(number);
    }
}
console.log(evenOrNot(9));
