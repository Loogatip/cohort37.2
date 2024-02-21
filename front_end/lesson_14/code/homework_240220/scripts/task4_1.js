/*
4*. Напишите функцию, 
    которая принимает объект и возвращает другой более сложный обьект, 
    который содержит все свойства исходного обьетка, 
    но значения свойств - это объект содержащий исходное значение, и его тип.

    Пример:
    { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { 
        a: { value: 'a', type: 'string' }
        , '36.6': { value: 36.6, type: 'number' }
        , 'John Doe': { value: 'John Doe', type: 'string' } }
*/

const taskObj = {
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}
function resultObject (obj){
const newTaskObj = {};
for(let key in obj){
    const value = obj[key];
    const type = typeof value;
    newTaskObj[key] = {value,type};
    }
    return newTaskObj;
}
console.log(resultObject(taskObj));


