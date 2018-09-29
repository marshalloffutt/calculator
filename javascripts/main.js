import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';


const initializeApp = () => {
    buttonEvents();
    // calculate(4,2, 'multiply') // 8
    // calculate(32,8, 'divide') // 4
    // calculate(7,6, 'subtract') // 1
    calculate(6,7, 'add') // 13
};