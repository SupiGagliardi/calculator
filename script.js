
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('#current-number');
let displayNum = display.textContent
let currentValue;
let placeholder;
let currentOperator = false;
let counter = 0;


const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b === 0 ? 'Infinity' : a / b;


function operate(operator, a, b) {

    return operator(a, b)
};


numberButtons.forEach(button => {

    button.addEventListener('click', (e) => {


        if (button.id === 'decimal') {

            
            if (parseFloat(display.textContent) % 1 != 0) {

                return

            } else {

                display.textContent += '.'
                displayNum = display.textContent;

            }
        }


        if (currentOperator === false) {

            display.textContent = '';
            currentOperator = true;

            if (displayNum.length > 9) {

                return

            } else if (displayNum.length === 1 && displayNum === '0') {

                displayNum = (display.textContent = button.textContent)

            } else {

                displayNum = (display.textContent += button.textContent)
            }

        } else if (currentOperator === true) {

            if (displayNum.length > 9) {

                return

            } else if (displayNum.length === 1 && displayNum === '0') {

                displayNum = (display.textContent = button.textContent)

            } else {

                display.textContent += button.textContent;
                displayNum = display.textContent;
            }

        } else {


            if (displayNum.length > 9) {

                return

            } else if (displayNum == currentValue && counter === 0) {

                counter++;
                displayNum = (display.textContent = button.textContent)

            } else {

                display.textContent += button.textContent;
                displayNum = display.textContent;
            }

        }
    })
});



operatorButtons.forEach((operator) => {

    operator.addEventListener('focus', (event) => {
        event.target.style.cssText = 'background-color: #395C8A';
    })

    operator.addEventListener('blur', (event) => {

        event.target.style.cssText = 'border: none';
    })

    operator.addEventListener('click', () => {

        if (currentOperator === multiply) {

            counter = 0;
            display.textContent = operate(currentOperator, currentValue, parseFloat(display.textContent));
            displayNum = display.textContent;
            currentOperator = false;

        } else if (currentOperator === divide) {

            counter = 0;
            display.textContent = operate(currentOperator, currentValue, parseFloat(display.textContent));
            displayNum = display.textContent;
            currentOperator = false;

        } else if (currentOperator === add) {

            counter = 0;
            display.textContent = operate(currentOperator, currentValue, parseFloat(display.textContent));
            displayNum = display.textContent;
            currentOperator = false;

        } else if (currentOperator === substract) {

            counter = 0;
            display.textContent = operate(currentOperator, currentValue, parseFloat(display.textContent));
            displayNum = display.textContent;
            currentOperator = false;

        }


        switch (operator.id) {

            case 'c':

                display.textContent = '0';
                displayNum = display.textContent;
                currentValue = parseFloat(display.textContent)

                break;

            case 'plus-minus':

                if (Math.sign(parseFloat(display.textContent)) === 0) {

                    return;

                } else if (Math.sign(parseFloat(display.textContent)) === -1) {

                    display.textContent = operate(multiply, parseFloat(display.textContent), -1);
                    currentValue = parseFloat(display.textContent);
                    display.textContent = currentValue;
                    displayNum = currentValue;

                } else if (Math.sign(parseInt(display.textContent)) === 1) {

                    display.textContent = operate(multiply, parseFloat(display.textContent), -1);
                    currentValue = parseFloat(display.textContent);
                    display.textContent = currentValue;
                    displayNum = currentValue;


                }
                break;

            case 'del':

                if (display.textContent == 0) {

                    return

                } else if (display.textContent.length === 1) {

                    display.textContent = '0';
                    currentValue = display.textContent;
                    displayNum = display.textContent;

                } else {

                    display.textContent = displayNum.substring(0, displayNum.length - 1)
                    displayNum = display.textContent;
                    currentValue = display.textContent;
                }
                break;

            case 'divide':

                currentOperator = divide;
                currentValue = parseFloat(display.textContent);
                display.textContent = currentValue;

                break;

            case 'multiply':

                currentOperator = multiply;
                currentValue = parseFloat(display.textContent);

                display.textContent = currentValue;

                break;

            case 'substract':

                currentOperator = substract;
                currentValue = parseFloat(display.textContent);
                display.textContent = currentValue;

                break;

            case 'add':

                currentOperator = add;
                currentValue = parseFloat(display.textContent);
                display.textContent = currentValue;

                break;

            case 'equal':

                if (currentOperator === false || currentOperator === true) {
                    return

                } else {

                    display.textContent = operate(currentOperator, currentValue, parseInt(display.textContent));
                    currentOperator = false;

                }

        }

    })
})


