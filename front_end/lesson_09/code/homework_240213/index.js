
// Задание 1. + Задание 3.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
// Найти максимальное и минимальное значение в массиве. Вывести в консоль.
// Вывести в консоль их сумму.

const rand = [];
for(let i = 0; i < 10; i++){
    rand.push(Math.round(Math.random()*100));
}
console.log(rand);

let max = rand[0];
let min = rand[0];
for( let i=1; i< rand.length; i ++){
    if(rand[i]>max){
        max = rand[i];
    }
    if(rand[i]<min){
        min= rand[i];
    }
}
console.log(max);
console.log(min);
console.log(max+min);


// Задание 2.
// Объвить массив из 10 любых, заполнить. 
// Вырезать первый элемент и добавить его в конец массива.

let firstElement = rand.shift();
rand.push(firstElement);
console.log(rand);


// Задание 4.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
// Найти сумму всех элементов массива. Вывести в консоль.

let sum = 0;
for(let i = 0; i < rand.length; i++){
    sum += rand[i];
}
console.log(sum);
console.log();


// Задание 5.
// Объявить массив из 5 элементов и заполнить его любыми числами. 
// Присвоить 5 переменным значения из массива с помощью деструктуризации.

const rand1 = [];
for(let i=0; i< 5; i++){
        rand1.push(Math.round(Math.random()*100));
    }
    const a = rand1[0];
    const b = rand1[1];
    const c = rand1[2];
    const d = rand1[3];
    const e = rand1[4];


// Задание 6.
// Разбить строку:
// "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая  кислота."
// на слова и вывести в консоль по одному слову в строке.

const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
let str1 = "";
for(let i = 0; i < str.length; i++){
    if(str[i] !==  "," && str[i] !== ":" && str[i] !== "."){
        str1 += str[i];
    }
}
let result = str1.split(" ");
for(let i = 0; i < result.length; i++){
    console.log(result[i]);
}