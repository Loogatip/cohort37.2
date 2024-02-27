/*
Написать функцию, принимающую масив, 
где могут быть вложенные массивы. 
Вернуть нужно “плоский массив”. 

Например:
На вход [1, 5, [67, 78, 34], 12, 14]
Должна вернуть [1, 5, 67, 78, 34, 12, 14]

Array.isArray

*/

//const taskArray = [1, 5, [67, 78, 34], 12, 14];

//  --- 1 ---
// function newTaskArray(array) {
//     let newArray = [];
//     for (let i=0; i<array.length; i++){
//         if(Array.isArray(array[i])) {
//             for (let b= 0; b< array[i].length; b++) {
//                 newArray.push(array[i][b]);
//             }
//         } else {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// console.log(newTaskArray(taskArray));

//  --- 2 ---
// function newTaskArray(array) {
//     return array.flat();
// }
// console.log(newTaskArray(taskArray));

// spread operator
// const arrayC = [1,2,3,4];

// const objC = {a:1, b: 2};
// const objCa = {...objC, c:3};

//  console.log(...arrayC);
//  console.log(objCa);

//  т.е. спрэд-оператор разбирает массив или объект на составляющие.
//  составляющие из массива могут существовать отдельно, 
//  а составляющие из массива нужно сразу прописать в другом объекта.


// ---- новое ---- 

// const humanJohn = {
//     name: 'John',
//     hello: function() {
// //       console.log('My name is John')
//         console.log(`My name is ${this.name}`)
//     }
// }

// // humanJohn.hello();

// // const testVar = humanJohn.hello.bind( {name: "Karl"});
// // testVar();

// // bind, call, apply

// const testVar = humanJohn.hello;
// testVar.call({name: "Karl"});

// // --- практическое применение ---

// const nodesList = document.querySelectorAll('a');

// [].map.call(nodesList, callFunction), param2, param3;
// [].map.apply(nodesList, [callFunction, param2, param3]);
// // --- -> две верхние строки заменяются на следующую:
// [...nodesList].map();


