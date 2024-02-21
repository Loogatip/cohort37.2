
const arr = [1,2,3,5,7,11,17,21];

// const arrPlusTwo = (array) => {
// const newArr = [];
// for(let i=0; i<array.length; i++){
//     newArr[i] = array[i] + 2;
// }
// return newArr;
// }
//console.log(arrPlusTwo(arr));


// ----  .map();  ----   -> не мутирующий метод - исходный массив не трогает, создает новый
// const newArrMap = 
// arr.map(
//     (elem) => { return elem+2}
// );
//  --- или
//const newArrMap = arr.map((elem) => elem+2);

// ---- элемент и индекс
// const newArrMap = arr.map(
//     (elem,i) => { return elem+i}
// );
//console.log(newArrMap);

// --- ** примеры .map() ** ----
//const arr1 = [1, 2, 3, 5, 7, 11, 17, 21];
//const newArrMap1 = arr1.map( (elem) => elem**2);

// const mapFun = (element) => {
//    return element * element
// }
// const newArrMap1 = [1, 2, 3, 5, 7, 11, 17, 21].map(mapFun);
// console.log(newArrMap1);

// ---
// const arr3 = [1, 2, 3, 5, 7, 11, 18, 22, 17, 21].map(
//     (element) => {
//         if(element % 2 ===0){
//            return element *2;
//         }else {
//             return element *3;
//         }
//     }
// );
// console.log(arr3);
// --- **** ----


// ---- .sort()  ----  -> мутирующий, желательно делать копию
// const sortedArr = arr.sort(
//     (a,b) => {
//         if(a<b){
//             return -1;
//         }
//         if(a>b){
//             return 1;
//         }else{
//             return 0;
//         }
//     }
// );
// console.log(sortedArr);


// ---- .filter()  ---- 
const filteredArr = arr.filter(
    (a) => {return a>5}
)
// console.log(filteredArr);


// ---- .forEach()  ---- 
const newFilteredWithForEach = [];
// arr.forEach(
//     (element) => {console.log(element)}
// )

// --- *** ---
// arr.forEach(
//     (element) => {
//         if(element >17){
//             newFilteredWithForEach.push(element);
//         }
//     }
// )
// console.log(newFilteredWithForEach);

let sum = 0;
arr.forEach(
    (element) => {
         sum +=element;
    }
)
console.log(sum);

// --- *** ---

