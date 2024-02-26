
/*
Написать функцию, 
которая принимает на вход массив имен и возвращает массив имен, 
начинающихся на букву "а" (большую или маленькую).
*/

const namesArray = [
    "Alex", "Bob", "Chris", "David", "Avram", "Frank", "Grace", 
    "Helen", "Ian", "Andrej", "Kate", "Leo", "Max", "Anastasiia", "Oscar"
];

function newNamesArrayWithFirstA(names) {
    return names.filter(name => name.toLowerCase().startsWith('a'));
}
console.log(newNamesArrayWithFirstA(namesArray));