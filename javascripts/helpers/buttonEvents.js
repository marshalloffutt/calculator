import {addNumber} from '../components/calculator.js';

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const multiplyButton = document.getElementById('multiplyButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const divideButton = document.getElementById('divideButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const addButton = document.getElementById('oneButton');
const zeroButton = document.getElementById('zeroButton');
const equalsButton = document.getElementById('equalsButton');
const subtractButton = document.getElementById('subtractButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click', (e) => {
      e.target.className += " selectedButton";
      setMathType('divide');
    });
};
  
const addButtonEvent = () => {
    addButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        setMathType('add');
    });
};

const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        setMathType('multiply');
    });
};

const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', (e) => {
        e.target.className += " selectedButton";
        setMathType('subtract');
    });
};

const equalsButtonEvent = () => {
    equalsButton.addEventListener('click', () => {
    calculate();
    });
};

const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumberCaller);
};

const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumberCaller);
};

const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumberCaller);
};

const fourButtonEvent = () => {
fourButton.addEventListener('click', addNumberCaller);
};

const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumberCaller);
};

const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumberCaller);
};

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
};

const zeroButtonEvent = () => {
    zeroButton.addEventListener('click', addNumberCaller);
};

const attachEvents = () => {
    divideButtonEvent();
    addButtonEvent();
    multiplyButtonEvent();
    subtractButtonEvent();
    equalsButtonEvent();
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    zeroButtonEvent();
};

export default attachEvents;