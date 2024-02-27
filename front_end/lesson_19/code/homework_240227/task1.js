/*
1. Написать функцию, которая принимает на вход 2 объекта, и склеивает их в один,
на выходе долежн быть объект, который содержит все свойства обоих объектов.
Если свойства(ключи) во входящих обьектах повторяются, то взять значение из второго объекта.
*/

const taskObj1 = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  key5: 'value5'
};

const taskObj2 = {
  key3: 'new_value3',
  key4: 'new_value4',
  key5: 'new_value5',
  key6: 'value6',
  key7: 'value7'
};

// const createNewTaskObj = Object.assign(taskObj1, taskObj2);
// console.log(createNewTaskObj);

// --- но так как в задании стоит 'написать функцию', тогда так:

function createNewTaskObj(obj1, obj2) {
    let newTaskObj = Object.assign(obj1, obj2);
    return newTaskObj;
}
console.log(createNewTaskObj(taskObj1, taskObj2));

// --- а попроще, но длинее так:

// function createNewTaskObj(obj1, obj2) {
    
//     let newTaskObj = {};
//     for (let i in obj1) {
//         newTaskObj[i] = obj1[i];
//     }
//     for (let i in obj2) {
//         newTaskObj[i] = obj2[i];
//     }
//     return newTaskObj;
// }
// console.log(createNewTaskObj(taskObj1, taskObj2));