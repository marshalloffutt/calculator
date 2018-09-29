import {printToDom} from '../helpers/util.js';
import {multiply} from '../helpers/maths.js';
import {divide} from '../helpers/maths.js';
import {add} from '../helpers/maths.js';
import {subtract} from '../helpers/maths.js';

const calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType) {
        case 'multiply':
            answer = multiply(num1, num2);
            break;
        case 'divide':
            answer = divide(num1, num2);
            break;
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer =  subtract(num1, num2);
            break;
        default:
            answer = 'try again';
    }
    printToDom(answer, 'result');
};

export {calculate};