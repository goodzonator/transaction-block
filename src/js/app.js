/* support webp */
import BaseHelpers from "./helpers/BaseHelpers.js";

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();
/* // support webp */


function updatePrices(currency) {
    const priceElements = document.querySelectorAll('[data-usd], [data-uah]');

    priceElements.forEach(element => {
        if (currency === 'usd') {
            element.innerHTML = element.getAttribute('data-usd');
        } else {
            element.innerHTML = element.getAttribute('data-uah');
        }
    });
}

const currencyInputs = document.querySelectorAll('input[name="currency"]');

currencyInputs.forEach(input => {
    input.addEventListener('change', (event) => {
        updatePrices(event.target.value);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const checkedCurrency = document.querySelector('input[name="currency"]:checked');
    if (checkedCurrency) {
        updatePrices(checkedCurrency.value);
    }

    setTimeout(() => {
        const loader = document.querySelector('.loader-wrap');
        loader.classList.add('hide');
    }, 2000)
});