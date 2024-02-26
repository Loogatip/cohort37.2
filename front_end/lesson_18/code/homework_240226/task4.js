
/*
Написать функцию, которая примет объект вида:
{
   'customer-id-1': {
      name: 'William',
      age: 54
   },
   'customer-id-2': {
      name: 'Tоm',
      age: 17
   }
}

и вернет массив обьектов вида:

[{name: 'William', age: 54, id: 'customer-id-1’}, {name: 'Tom', age: 17, id: 'customer-id-2'}]
*/

const taskObject = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};

function taskResult(obj) {
    return Object.keys(obj).map(key => {
        return {...obj[key], id: key };
    });
}
console.log(taskResult(taskObject));