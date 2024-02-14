
//    * Базовый синтаксис *

// -----
// function sum(a){
//     console.log(a);
//     return(a);
// }

// const resultSum = sum(1);
// console.log(resultSum);

// console.log(sum(1));

// -----
// function sum(a){
//     return(a);
//     console.log(a);
// }
// console.log(sum(1));

// ----- deklaration   -> главный приоритет
// function sum(a,b){
//     console.log(a);
//     return(a+b);
// }
// const resultSum = sum(1,5);
// console.log(resultSum);

// ----- expresion      -> всегда сверху
// const sum = function(a, b){
//     return a+b;
// }
// const resultSum = sum(1,5);
// console.log(resultSum);

//                         -----  варианты приоритета вывода  -> нихрена не понял
//              * * *  строки 38 и 53 - абсолютно одинаковые, разница где написано  * * *  

const sum = function(a,b){          // -> эта фигня (expresion) всегда пишется сверху
    return a+b;
}

//const resultSum = sum(1,5);
//const resultSumA = sum(1,5);
//console.log(resultSumA);

//const sumAlternative = sum;

//const resultSum = sumAlternative(1,5);
//console.log(resultSum);

// hoisting (для declaration)
function sumA (a,b){                // -> эта фигня (deklaration) пишется где угодно и она будет работать
    return(a+b);
}
console.log(sum(1,5))
console.log(sumA(1,5));
