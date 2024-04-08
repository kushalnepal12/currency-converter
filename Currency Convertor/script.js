
const amountInput = document.getElementById('amount');
const fromFlagSelect = document.getElementById('from-flag');
const toFlagSelect = document.getElementById('to-flag');
const convertedAmountDisplay = document.getElementById('converted-amount');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');


const usdToCadRate = 1.25; // 1 USD = 1.25 CAD
const cadToUsdRate = 0.8; // 1 CAD = 0.8 USD

function usdToCad(amount) {
    return (amount * usdToCadRate).toFixed(3);
}


function cadToUsd(amount) {
    return (amount * cadToUsdRate).toFixed(3);
}


function handleConversion() {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount < 0) {
        alert('Please enter a valid positive number for the amount.');
        return;
    }

    let convertedAmount;
    if (fromFlagSelect.value === 'us' && toFlagSelect.value === 'canada') {
        convertedAmount = usdToCad(amount);
    } else if (fromFlagSelect.value === 'canada' && toFlagSelect.value === 'us') {
        convertedAmount = cadToUsd(amount);
    } else {
        alert('Invalid conversion selection.');
        return;
    }

    convertedAmountDisplay.textContent = convertedAmount;
}


convertButton.addEventListener('click', handleConversion);

resetButton.addEventListener('click', function() {
    amountInput.value = '';
    convertedAmountDisplay.textContent = '';
    fromFlagSelect.value = 'canada';
    toFlagSelect.value = 'us';
});
