/*
1. Напишите фукнцию, которая будет принимать массив. 
    Массив может содержать любые строки и числа. 
    Функция должна вернуть объект, который содержит свойства, 
    ключ и значение которых равны соответствующему элементу массива.

    Пример работы функции:
    ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }
*/

const taskArr = ['a', 36.6, 'John Doe'];
const taskObj = {};

const newTaskObj = (array) => {
    for(let i=0; i<array.length; i++){
        taskObj[array[i]] = array[i]; 
    }
    return taskObj;
}
    console.log(newTaskObj(taskArr));
