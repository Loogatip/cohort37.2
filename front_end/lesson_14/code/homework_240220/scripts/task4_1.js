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
const newTaskObj = {};
for(i in taskObj){
    
}
console.log(newTaskObj);

