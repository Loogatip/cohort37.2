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
const newTaskObjByType = () =>{
for(i in taskObj){
    newTaskObj[i] = typeof taskObj[i];
}
return newTaskObj;
}
console.log(newTaskObjByType(newTaskObj));
