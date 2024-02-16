
const inputElelement = document.querySelector('#input-field');
//console.log(inputElelement);

let userInput;
const inputFieldInput = (evt) => {
userInput = evt.target.value;
console.log(userInput);
}
inputElelement.addEventListener('input', inputFieldInput);

const createButtonElement = document.querySelector('button.btn');
//console.log(createButtonElement);

const submitButtonHandler = (evt) => {
    //console.log(userInput);
    //console.log(evt);
    testTextElement.textContent = 'Тест контента';
}
createButtonElement.addEventListener('click', submitButtonHandler);

//  *** ----- ***
const testTextElement = document.querySelector('#text');
//console.log(testTextElement);
//testTextElement.textContent = 'Тест контента';