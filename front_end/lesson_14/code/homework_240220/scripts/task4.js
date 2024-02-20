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
for(i in taskObj){
    newTaskObj[i] = typeof taskObj[i];
}
console.log(newTaskObj);

const playerJohn = {
    height: 170,
    weight: 80,
    sport: ['regbi','baseball','basketball'],
    'full name': 'John Doe',
}

const obj = {};

const objectToObject = (object) => {
    for(i in object){
        obj[i] = typeof object[i];
    }
    return obj;
}

console.log(objectToObject(playerJohn));