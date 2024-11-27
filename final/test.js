// Grace Cunningham 11/26/24

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

function addNumbers() {
    const number = document.getElementById('num').value;
    let result = '';

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');

        result = i + Number(number);
        listItem.textContent = `${i} + ${number} = ${result}`;
        add.appendChild(listItem);
    }
};

function subtractNumbers() {
    const number = document.getElementById('num').value;
    let result = '';
    let i = 1;

    while (i <= 10) {
        const listItem = document.createElement('li');

        result = i - Number(number);
        listItem.textContent = `${i} - ${number} = ${result}`;
        subtract.appendChild(listItem);
        i++
    }
};

function multiplyNumbers() {
    const number = document.getElementById('num').value;
    let result = '';
    let i = 1;

    do {
        const listItem = document.createElement('li');

        result = i * Number(number);
        listItem.textContent = `${i} * ${number} = ${result}`;
        multiply.appendChild(listItem);
        i++;
    } while (i <= 10);
};

function divideNumbers() {
    const number = document.getElementById('num').value;
    let result = '';
    let i = 1;

    do {
        const listItem = document.createElement('li');

        result = (i / Number(number)).toFixed(2);
        listItem.textContent = `${i} / ${number} = ${result}`;
        divide.appendChild(listItem);
        i++;
    } while (i <= 10);
};

function callFunctions() {
    addNumbers();
    subtractNumbers();
    multiplyNumbers();
    divideNumbers();
};

document.getElementById('calculate').addEventListener('click', callFunctions);
