
/*
 №2. Написать функцию, 
которая принимает на вход массив чисeл и возвращает их сумму. 
Если получится использовать метод reduce - будет здорово.

 №3. Написать функцию, 
которая принимает на вход массив чисел и возвращает массив из тех же элементов, 
но в обратном порядке.
*/

const numbersArray = [1, 4 , 15, 8 , 9 , 65, 72];

// -№2-
function sumNumbersArray(numbers) {
    return numbers.reduce((accumulator, num) => accumulator + num, 0);
}
console.log(sumNumbersArray(numbersArray));

// -№3-
function reverseArray(numbers) {
    return numbers.reverse();
}
console.log(reverseArray(numbersArray));
