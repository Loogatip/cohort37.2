
                //   * Циклы *

const arrName = [1,2,3,4,"a",null,NaN,[1,2]];

// for (let i=0; i< arrName.length; i++){
//     console.log(arrName[i]); 
// }
// for(let i = arrName.length-1; i >= 0; i-- ){
//     console.log(arrName[i])
// }

// const arrTwo = [];
// for (let i = arrName.length-1; i >= 0; i--) {
//     arrTwo.push(arrName[i]);                // -> из первого массива во второй в обратном порядке
//     //arrTwo.splice(0,0,arrName[i--]);      // -> неправильно, но можно еще поиграться
// }
// console.log(arrTwo);


                //  * WHILE *

let i =0;
while(i<arrName.length){
    console.log(arrName[i])
    i++;
}

//   *  для тех кто собирается работать FrontEnd доп.мат:  *

const sArray = [1,2,3,4,5,6];
//const [a, b, c] = sArray;
const [a, b, ...c]= sArray;

// const a = sArray[0];
// const b = sArray[1];
// const c = sArray[2];

const copyArray = sArray;               // -> это не копия массива, это один и тот же массив (мутация -> меняется все и в обоих массивах)
const copyArray1 = [...sArray];         // -> это копия
                                        // -> запомнить, что и когда меняется, а что и где не меняется
sArray[1] = 4;

// console.log(sArray);
// console.log(copyArray);
// console.log(copyArray1);
console.log(c);







