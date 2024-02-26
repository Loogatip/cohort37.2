
const arrayBasis = [2, 3, 4, 5];

// function newArray(array) {
//     return array.map(element =>
//      element % 2 !=0 ? element*2 : element)   
// }
// console.log(newArray(array));

function newArray(array) {
    const result = array.map(element =>
     element % 2 !=0 ? element*2 : element)  
     return result; 
}
console.log(newArray(arrayBasis));
