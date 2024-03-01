
//  --- это не Promises ---

// найдем элементы на странице
// const inputElement = document.querySelector('#nameinput');
// const getNameBtn = document.querySelector('#getnamebtn')
// const cancelEnterNameBtn = document.querySelector('#goaway');

// let enteredNameString;

// const getInputedName = (helloMaker) => {
//     const handleClickSubmitNameBtn = () => {
//         enteredNameString = inputElement.value;
//         helloMaker(enteredNameString);
//     }
//     getNameBtn.addEventListener('click', handleClickSubmitNameBtn)
// }
// getInputedName(helloMaker);

// function helloMaker(name) {
//     console.log(`Hello ${name}`)
// }

//  --- PROMISES ---

const inputElement = document.querySelector('#nameinput');
const getNameBtn = document.querySelector('#getnamebtn')
const cancelEnterNameBtn = document.querySelector('#goaway');

let enteredNameString;

const getInputedName = () => {
    return new Promise(

        // начало логики
        (callBackSuccess, callBackReject) => {

        // первый кусок логики
        const handleClickSubmitNameBtn = () => {
            enteredNameString = inputElement.value;
            callBackSuccess(enteredNameString);
        }
        getNameBtn.addEventListener('click', handleClickSubmitNameBtn)

        // второй кусок логики
        const handleClickRejectNameBtn = () => {
            callBackReject('Отказался вводить')
        }
        cancelEnterNameBtn.addEventListener('click', handleClickRejectNameBtn)
    }
        // конец логики
    )
}
const resultOfInput = getInputedName();

// resultOfInput
// .then(                                   // -> при успешном завершении
//         (argum) => {console.log(argum)}, 
//         (argum) => {console.log(argum)}      // -> можно и не прописывать
//     );

// //  -> можно писать и по отдельности, только с одним аргументом

// resultOfInput.then((argum) => {console.log(argum)});
// resultOfInput.catch((argum) => {console.log(argum)});
// resultOfInput.finally(() => {console.log('finish')});

resultOfInput
    .then( (argum) => { console.log(argum) } )
    .catch( argum => console.log('proof' + argum ))
//.finally(() => {console.log('finish')});

// console.log(resultOfInput);
// function helloMaker(name) {
//     console.log(`Hello ${name}`)
// }