
const currencyData = async (q) => {
    const serverReponse = await fetch(q);
    const body = await serverReponse.json(); 
    showCurrency(body.rates);
    return body.rates;
}
currencyData('https://openexchangerates.org/api/latest.json?app_id=c56da6a380da489ea5745895577c2ac4');


const currencyFrom = document.querySelector('#choice_1');
const currencyTo = document.querySelector('#choice_2');
const amount = document.querySelector('#input-amount');
const button = document.querySelector('#submit');
const result = document.querySelector('#result');

let userChoice;
 currencyFrom.addEventListener('change', inputCurrencyFromHandler);

 function inputCurrencyFromHandler(event) {
    console.log(event);
    return userChoice;
 }

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
    // for(let i in elem){
        // const firstCurrency = document.createElement('option')
        // const secondCurrency = document.createElement('option')
        // firstCurrency.textContent = elem[i];
        // secondCurrency.textContent = i;
        // currencyFrom.append(firstCurrency);
        // currencyTo.append(secondCurrency);
    // }
}
 const currencyToValue = (k) => {

    return result;
 }
 currencyToValue(currencyFrom);

const calculator = (currencyFrom, currencyTo, amount) => {
    // let curency1 = currencyFrom[elem];
        
    const rate = amount/currency1*currency2;
    return rate.toFixed(2);
};
 
const submitButtonHandler = (evt) => {
    evt.preventDefault();
    let resultValue = calculator(currencyFrom, currencyTo, amount);
    result.textContent = resultValue;
};

document.querySelector('#converter-form').addEventListener('submit', submitButtonHandler);