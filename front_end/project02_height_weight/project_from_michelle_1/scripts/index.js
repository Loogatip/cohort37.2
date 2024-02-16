const heightInput = document.querySelector('#your-height');
const weightInput = document.querySelector('#your-weight');

let userInput1;
let userInput2;

const inputField1 = (evt) => {
    userInput1 = evt.target.value;
}

const inputField2 = (evt) => {
    userInput2 = evt.target.value;
    console.log(evt)
}
heightInput.addEventListener('input', inputField1);
weightInput.addEventListener('input', inputField2);

const createButtonElement = document.querySelector('button');

let result;
const resultElement = document.querySelector('#result2');

const submitButtonHandler = (evt) => {
    result = userInput2 / ((userInput1 / 100)**2);
    resultElement.textContent = result;
    console.log(result);
}

createButtonElement-addEventListener('click', submitButtonHandler);


// const resultCalc = (userInput1, userInput2) => {
//     result = userInput2 / ((userInput1 / 100)**2);
//     resultElement.textContent = result;
//     console.log(result);
// }
