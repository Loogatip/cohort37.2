/*
Написать функцию, 
которая сравнит 2 объекта и вернет true, если они идентичны, иначе false.

Объекты считаются идентичными, 
если они содержат одинаковое количество свойств, названия 
и значения всех свойств совпадают.
*/

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let property in obj1) {
        if (!obj2.hasOwnProperty(property)) {
            return false;
        }
        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }
    return true;
}
let taskObj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
let taskObj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
let taskObj3 = {
    key1: 'value1',
    key2: 'value2',
    key4: 'value4'
};

console.log(compareObjects(taskObj3, taskObj2)); // Выведет: true
console.log(compareObjects(taskObj1, taskObj2)); // Выведет: false

