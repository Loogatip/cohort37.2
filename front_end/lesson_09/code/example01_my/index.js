
//    Массивы в JS  

const arrName = [7, 2, 3, 4, "a"];  //-> в массиве могут быть любые значения
let  arrName1 = [];

//console.log(arrName[3]);
//console.log(arrName.length);

//arrName.push("last");                           // -> добавляет последний элемент в массив
//const testVar = arrName.push("last");
//console.log(arrName);
//console.log(testVar);

//const testVar = arrName.splice(1, 0, "1a");     // -> одновременно удаляет и добавляет, просто добавляет 
                                                  //    (1.на какое место (или начиная с ..), 2.удалять или нет, 3.что добавить)

//arrName[1] = "1a";                              // ->  меняет определенный элемент

// arrName.pop();                                 // -> удаляет последний элемент массива
//const testVar = arrName.pop();

//              * shift / unscift *               // ->  удаляет/добавляет первый элемент в массиве
//arrName.shift();
const testVar = arrName.shift();

//const testVar = arrName.unshift('b');
//arrName.unshift('b');

console.log(testVar);
//console.log(arrName);
