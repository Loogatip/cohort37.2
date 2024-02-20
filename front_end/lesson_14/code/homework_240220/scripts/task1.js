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

const newTaskObj = () => {
    for(let i=0; i<taskArr.length; i++){
        taskObj[taskArr[i]] = taskArr[i]; 
    }
    return taskObj;
}
    console.log(newTaskObj(taskObj));
