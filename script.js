const display = document.getElementById('display');
const keys = document.querySelectorAll('.keys button');

let currentOperation = '';
let previousOperation = '';

keys.forEach((button) => {
    button.addEventListener('click', (e) => {
        const keyValue = e.target.textContent;

        switch (keyValue) {
            case 'C':
                currentOperation = '';
                previousOperation = '';
                display.value = '';
                break;
            case '←':
                currentOperation = currentOperation.slice(0, -1);
                display.value = currentOperation;
                break;
            case '=':
                try {
                    const result = eval(currentOperation);
                    display.value = result;
                    previousOperation = currentOperation;
                    currentOperation = '';
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
                    currentOperation += ' ' + keyValue + ' ';
                } else {
                    currentOperation += keyValue;
                }
                display.value = currentOperation;
        }
    });
});