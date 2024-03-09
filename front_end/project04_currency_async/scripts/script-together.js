
const currencyFrom = document.querySelector('#choice_1');
const currencyTo = document.querySelector('#choice_2');
const amount = document.querySelector('#input-amount');
const button = document.querySelector('#submit');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const soundElement = document.querySelector('#sound');

const currencyData = async () => {
    const serverResponse = await fetch('https://openexchangerates.org/api/latest.json?app_id=c56da6a380da489ea5745895577c2ac4');
    const body = await serverResponse.json(); 
    showCurrency(body.rates);
    return body.rates;
}
currencyData();

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
}

 const calculator = (rates, currencyFrom, currencyTo, amount) => {
     const currency1 = rates[currencyFrom];
     const currency2 = rates[currencyTo];
    
     const rate = amount/currency1*currency2;
     return rate.toFixed(2);
    };
 
const submitButtonHandler = async (evt) => {
    evt.preventDefault();
    if(amount.value != isNaN && amount.value > 0) {
    const rates = await currencyData();
    let resultValue = calculator(rates, currencyFrom.value, currencyTo.value, amount.value);
    result.textContent = `Результат: ${resultValue}`;
    
    } else {
        alert('только числовое значение больше нуля')
    }
};
document.querySelector('#converter-form').addEventListener('submit', submitButtonHandler);
document.querySelector('#reset').addEventListener('click', resetResult = () => result.textContent = 'Результат');
button.addEventListener('click', () => soundElement.play());