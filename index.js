let valueOne = document.getElementById('value1');
let valueTwo = document.getElementById('value2');
let reply = document.getElementById('value3');
let assignments = document.getElementById('operators');
let allInputs = document.querySelectorAll('input');

// CLear Function
function clearFunction() {
    valueOne.value = "";
    valueTwo.value = "";
    reply.value = "";
    assignments.value ="";
}

// Arithmetic Operator function
function division() {
    assignments.value = '';
    assignments.value += '/';
}
function multiply() {
    assignments.value = ''
    assignments.value += '*'
}
function minus() {
    assignments.value = ''
    assignments.value += '-'
}
function addition() {
    assignments.value = ''
    assignments.value += '+'
}
function modulus() {
    assignments.value = ''
    assignments.value += 'mod'
}
function power() {
    assignments.value = ''
    assignments.value += '^'
}
function percentage() {
    assignments.value = ''
    assignments.value += '%'
}

// Equals Function
function equals() {
    if  (assignments.value === '%'){
        reply.value = ((Number(valueOne.value) / 100) * Number(valueTwo.value))
    } else if (assignments.value === '*'){
        reply.value = Number(valueOne.value) * Number(valueTwo.value)
    } else if (assignments.value === '/'){
        reply.value = Number(valueOne.value) / Number(valueTwo.value)
    } else if (assignments.value === '-'){
        reply.value = Number(valueOne.value) - Number(valueTwo.value)
    } else if (assignments.value === '+'){
        reply.value = Number(valueOne.value) + Number(valueTwo.value)
    } else if (assignments.value === 'mod'){
        reply.value = Number(valueOne.value) % Number(valueTwo.value)
    } else if (assignments.value === '^'){
        reply.value = Math.pow(Number(valueOne.value), Number(valueTwo.value))
    } else if (valueOne.value || valueTwo.value || assignments.value === '') {
        alert('Please input all fields')
    } else {
        alert('Please input the right thing')
    }
}

// Numbers functions
function numbOne() {
    if (focusedInput === 'value1') {
        valueOne.value += '1';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '1';
    } else {
        alert('Please select an input field.');
    }
}
function numbTwo() {
    if (focusedInput === 'value1') {
        valueOne.value += '2';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '2';
    } else {
        alert('Please select an input field.');
    }
}
function numbThree() {
    if (focusedInput === 'value1') {
        valueOne.value += '3';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '3';
    } else {
        alert('Please select an input field.');
    }
}
function numbFour() {
    if (focusedInput === 'value1') {
        valueOne.value += '4';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '4';
    } else {
        alert('Please select an input field.');
    }
}
function numbFive() {
    if (focusedInput === 'value1') {
        valueOne.value += '5';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '5';
    } else {
        alert('Please select an input field.');
    }
}
function numbSix() {
    if (focusedInput === 'value1') {
        valueOne.value += '6';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '6';
    } else {
        alert('Please select an input field.');
    }
}
function numbSeven() {
    if (focusedInput === 'value1') {
        valueOne.value += '7';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '7';
    } else {
        alert('Please select an input field.');
    }
}
function numbEight() {
    if (focusedInput === 'value1') {
        valueOne.value += '8';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '8';
    } else {
        alert('Please select an input field.');
    }
}
function numbNine() {
    if (focusedInput === 'value1') {
        valueOne.value += '9';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '9';
    } else {
        alert('Please select an input field.');
    }
}
function numbZero() {
    if (focusedInput === 'value1') {
        valueOne.value += '0';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '0';
    } else {
        alert('Please select an input field.');
    }
}
function numbDot() {
    if (focusedInput === 'value1') {
        valueOne.value += '.';
    } else if (focusedInput === 'value2') {
        valueTwo.value += '.';
    } else {
        alert('Please select an input field.');
    }
}
