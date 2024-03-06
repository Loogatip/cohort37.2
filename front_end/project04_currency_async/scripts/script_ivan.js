const currencyFrom = document.querySelector('#choice_1');
const currencyTo = document.querySelector('#choice_2');
const amount = document.querySelector('#input-amount');
const button = document.querySelector('#submit');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

let userChoice1;
let userChoice2;
let ratesList;

const currencyData = async (q) => {
    const serverReponse = await fetch(q);
    const body = await serverReponse.json();
    ratesList = body.rates;
    showCurrency(body.rates);
    return body.rates;
};

function showCurrency(elem) {
    const keys = Object.keys(elem);
    keys.forEach((elem) => {
        const firstCurrency = document.createElement('option')
        const secondCurrency = document.createElement('option')
        firstCurrency.textContent = elem;
        secondCurrency.textContent = elem;
        currencyFrom.append(firstCurrency);
        currencyTo.append(secondCurrency);
    })
};

const currencyToValue = (k) => {
    return ratesList[k.value];
};

const calculator = (currencyFrom, currencyTo, amount) => {
    const rate = amount.value / currencyFrom * currencyTo;
    return rate.toFixed(2);
};

function inputCurrencyFromHandler(event) {
    userChoice1 = currencyToValue(event.target);
};

const submitButtonHandler = (evt) => {
    evt.preventDefault();
    userChoice2 = currencyToValue(currencyTo);
    let resultValue = calculator(userChoice1, userChoice2, amount);
    result.textContent = resultValue;
};

currencyData('https://openexchangerates.org/api/latest.json?app_id=c56da6a380da489ea5745895577c2ac4');

document.querySelector('#converter-form').addEventListener('submit', submitButtonHandler);
currencyFrom.addEventListener('change', inputCurrencyFromHandler);