
//  * Стрелочная функция *

// **** 1 ****
// const sumAr = (a, b) => {           // ->  тоже, что и const sumAr = function(a,b){ return a+b; }
//     console.log("Hi");
//     return a + b;
// }
//console.log(sumAr(5,2));
// --- или
//const result1 = sumAr;
//console.log(result1(5,2));
// --- или
//const result1 = sumAr(5,3);
//console.log(result1);

// **** 2 ****
// const sumAr = (a, b) => a + b;          // -> короткая запись одного действия
// console.log(sumAr(5,2));

// **** 3 ****
// const sumAr = (a) => a**a;              // -> если параметр только один, можно писать и без скобок
// console.log(sumAr(3));

// **** 4 ****
// const sumAr = () => "Hello";               // ->  => {return "Hello"}
// console.log(sumAr());                      // -> sumAr() скобки обязательны

// **** 5 ****
 const sum = (a = 2,b = 2) => a+b;     // -> в скобках параметры по умолчанию 
                                       //    (если пользователь, в последствии не задаст оба параметра)
// const result = sum(3);
// console.log(result);

// **** 6 ****  // -> самостоятельно
const multi = (a,b) => a*b;
//console.log(multi(3,2));

const pow = (a,b) => a**b;
//console.log(pow(2,3));

// **** 7 ****
const universal = (a,b,f) => {         // -> f - называется 'callback function'
    return f(a,b);                     // ->     объявляем, что это функция здесь
}
console.log(universal(3,2,sum));
console.log(universal(2,3,multi));
console.log(universal(2,3,pow));
// или 
console.log(universal(6,2,(a,b) => a/b));
