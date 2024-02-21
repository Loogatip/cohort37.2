/*
4. Напишите функцию, 
    которая принимает объект и возвращает другой обьект, 
    который содержит все свойства исходного обьетка, но значения свойств - это их типы.

    Пример:
    { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> {
        a: 'string', '36.6': 'number', 'John Doe': 'string' }
*/

const taskObj = {
     a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe'
}

const newTaskObj = {};

const newTaskObjByType = (obj) =>{
for(i in obj){
    newTaskObj[i] = typeof obj[i];
}
return newTaskObj;
}
console.log(newTaskObjByType(taskObj));
