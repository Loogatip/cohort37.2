
const ourButton = document.querySelector('button');
ourButton.addEventListener('click', () => {console.log('Click')});

// const takeTime = () => {
// let sum = 0;
// console.log('Начинаю считать')
// const startTime = Date.now();
// for(let i = 0; i< 1000000000; i++) {
//     sum += i;
// }
// const endTime = Date.now();
// console.log('Закончила через' + (endTime - startTime));
// }
// takeTime();


// --- следующее --- 
//    setTimeout

// const printHelloToConsole = () => {
//     console.log("HELLO")
// }

// const checkTimeouts = () => {
//     setTimeout(printHelloToConsole, 2000)
//     console.log("From JS")
// }
// checkTimeouts();

// ----

// const checkTimeouts = () => {
//     setTimeout(printHelloToConsole, 0)
//     console.log("From function")
// }
// checkTimeouts();

// ----

// const checkTimeouts = () => {                       // ->  порядок вывода команд на экран
//     console.log('1');
//     setTimeout(() => {console.log('2')}, 0);
//     console.log('3');
//     setTimeout(() => {console.log('4')}, 2000);
//     console.log('5');
// }
// checkTimeouts();


// --- следующее --- 
//     setTimeout              -> задаем интервал вывода и ограничиваем его действие
//                             -> или останавливаем, или указываем счетчик кол-ва раз
const checkIntervals = () => {
    let count = 5;
    
    const funcInterval = () => {
        console.log('I am interval')
        count -= 1;
        if(count <= 0){ 
            clearInterval(idI);
        }
    }
    const idI = setInterval(funcInterval,1000)
    //setTimeout(() => {clearInterval(idI)},5000);
}
checkIntervals();


// --- примеры ---

// в script_note.js
// переписать у препода
