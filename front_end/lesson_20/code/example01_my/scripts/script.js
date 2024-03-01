
const numbers = [1, 2, 3];

function createAverageNumber(array) {

    const sum = array.reduce((accumulator, element) => accumulator + element);
    return sum / array.length;
}
console.log(createAverageNumber(numbers));

function createAverageNumber(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / numbers.length;
}
console.log(createAverageNumber(numbers));