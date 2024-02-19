
const currencyFrom = document.querySelector('#choice_1');
const currencyTo = document.querySelector('#choice_2');
const amount = document.querySelector('#input-amount');
const button = document.querySelector('#colculate');
const result = document.querySelector('#result');

let changeFrom;
let changeTo;
let inputAtAmount;

const currencyFromInputHandler = (evt) => {changeFrom = currencyFrom.value};
const currencyToInputHandler = (evt) => {changeTo = currencyTo.value};
const inputFieldAmount = (evt) => {inputAtAmount = amount.value};

const calculator = (currencyFrom, currencyTo, amount) => {
    let currency1;
    let currency2;

    switch(currencyFrom){
        case "USD": currency1 = 1; break;
        case "EUR": currency1 = 0.92; break;
        case "GBP": currency1 = 0.8; break;
    }
    switch(currencyTo){
        case "USD": currency2 = 1; break;
        case "EUR": currency2 = 0.92; break;
        case "GBP": currency2 = 0.8; break;
    }
    const rate = amount/currency1*currency2;
    return rate.toFixed(3);
};
const submitButtonHandler = (evt) => {
    evt.preventDefault();
    let result1 = calculator(changeFrom, changeTo, inputAtAmount)
    result.textContent = result1;
};

currencyFrom.addEventListener('input', currencyFromInputHandler);
currencyTo.addEventListener('input', currencyToInputHandler);
amount.addEventListener('input', inputFieldAmount);
button.addEventListener('click', submitButtonHandler)
result.addEventListener('change', submitButtonHandler);
