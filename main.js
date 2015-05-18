/* Variables */

//To set up the HTML display, where .display is the class name
var $display = document.querySelector('.display');
var calculation = 0;
var displayString = "0";
var pendingOperation;
var nthOperation;


//Event handler functions
function numberPressed(event) {
  var inputNumber = Number(event.target.textContent);
  if (pendingOperation !== undefined) {
    switch (pendingOperation) {
      case "+":
        calculation += inputNumber;
        break;
      case "-":
        calculation -= inputNumber;
        break;
      case "*":
        calculation *= inputNumber;
        break;
      case "/":
        calculation /= inputNumber;
        break;
      case "^n":
        calculation = Math.pow(calculation, inputNumber);
        break;
      case "^1/n":
        calculation = Math.pow(calculation, (1/inputNumber));
        break;
    }
    pendingOperation = undefined;
    $display.textContent = inputNumber;
  } else {
    displayOrContatenateNumber(inputNumber);
  }
}

function operatorPressed(event) {
  pendingOperation = event.target.textContent;
  $display.textContent = calculation;
}

function equalPressed(event) {
  $display.textContent = calculation;
}

function clearPressed(event) {
  calculation = 0;
  displayString = 0;
  percentChange = 0;
  $display.textContent = calculation;
}

function percentPressed(event) {
  calculation = calculation/100;
  $display.textContent = calculation;
}

function signPressed(event) {
  calculation = calculation*-1;
  $display.textContent = calculation;
}

function decimalPressed(event) {
  var decimalChange = String(calcuation) + 0.00;
  calculation = Number(decimalChange);
  $display.textContent = calculation;
}

function squaredPressed(event) {
  calculation = Math.pow(calculation, 2);
  $display.textContent = calculation;
}

function cubedPressed(event) {
  calculation = Math.pow(calculation, 3);
  $display.textContent = calculation;
}

function npowerPressed(event) {
  pendingOperation = event.target.textContent;
}

function squareRootPressed(event) {
  calculation = Math.pow(calculation, .5);
  $display.textContent = calculation;
}

function cubeRootPressed(event) {
  calculation = Math.pow(calculation, (1/3));
  $display.textContent = calculation;
}

function nrootPressed(event) {
  pendingOperation = event.target.textContent;
}

function sinPressed(event) {
  calculation = Math.sin(calculation);
  $display.textContent = calculation;
}

function cosPressed(event) {
  calculation = Math.cos(calculation);
  $display.textContent = calculation;
}

function tanPressed(event) {
  calculation = Math.tan(calculation);
  $display.textContent = calculation;
}

function sinhPressed(event) {
  calculation = Math.sinh(calculation);
  $display.textContent = calculation;
}

function coshPressed(event) {
  calculation = Math.cosh(calculation);
  $display.textContent = calculation;
}

function tanhPressed(event) {
  calculation = Math.tanh(calculation);
  $display.textContent = calculation;
}

function logPressed(event) {
  calculation = Math.log(calculation);
  $display.textContent = calculation;
}

function piPressed(event) {
  calculation = calculation*3.14159;
  $display.textContent = calculation;
}

function ekeyPressed(event) {
  calculation = calculation*2.71828;
  $display.textContent = calculation;
}


//Utility Functions
function displayOrContatenateNumber(inputNumber) {
  if (calculation === 0) {
    calculation = Number(inputNumber);
    displayString = String(inputNumber);
  } else {
    calculation = Number(displayString + inputNumber);
    displayString = String(displayString + inputNumber);
  }
  $display.textContent = displayString;
}


//Setup event handlers
[].forEach.call(document.querySelectorAll('.number'), function(element) {
  element.addEventListener('click', numberPressed);
}, false);

[].forEach.call(document.querySelectorAll('.operator'), function(element) {
  element.addEventListener('click', operatorPressed);
}, false);

[].forEach.call(document.querySelectorAll('.scikey'), function(element) {
  element.addEventListener('click', scikeyPressed);
}, false);

document.querySelector('.equal').addEventListener('click', equalPressed);
document.querySelector('.clear').addEventListener('click', clearPressed);
document.querySelector('.percent').addEventListener('click', percentPressed);
document.querySelector('.sign').addEventListener('click', signPressed);
// document.querySelector('.decimal').addEventListener('click', decimalPressed);
document.querySelector('.squared').addEventListener('click', squaredPressed);
document.querySelector('.cubed').addEventListener('click', cubedPressed);
document.querySelector('.npower').addEventListener('click', npowerPressed);
document.querySelector('.squareroot').addEventListener('click', squareRootPressed);
document.querySelector('.cuberoot').addEventListener('click', cubeRootPressed);
document.querySelector('.nroot').addEventListener('click', nrootPressed);
document.querySelector('.sin').addEventListener('click', sinPressed);
document.querySelector('.cos').addEventListener('click', cosPressed);
document.querySelector('.tan').addEventListener('click', tanPressed);
document.querySelector('.sinh').addEventListener('click', sinhPressed);
document.querySelector('.cosh').addEventListener('click', coshPressed);
document.querySelector('.tanh').addEventListener('click', tanhPressed);
document.querySelector('.log').addEventListener('click', logPressed);
document.querySelector('.pi').addEventListener('click', piPressed);
document.querySelector('.ekey').addEventListener('click', ekeyPressed);
