"use strict";

console.log(calc(1, 3, 'multiplication'));

function calc(value1, value2, operator) {
    if (isNumber(value1) && isNumber(value2) && isOperator(operator)) {
        switch (operator) {
            case 'plus':
                return value1 + value2;
            case 'minus':
                return value1 - value2;
            case 'multiplication':
                return value1 * value2;
            case 'divide':
                return value1 / value2;
        }
    } else {
        alert('Иди на хер!');
    }
}

function isNumber(value) {
    return (typeof value) == 'number';
}

function isOperator(operator) {
    return operator === 'plus' || operator === 'minus' || operator === 'multiplication' || operator === 'divide';
}