document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value === 'C') {
                currentInput = '';
                operator = null;
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (operator && previousInput) {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    operator = null;
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput && previousInput && operator) {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function operate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return (a / b).toString();
            default: return b;
        }
    }
});
