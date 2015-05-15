var instructionQueue = [];
var equationInput = instructionQueue.join('')
var equationAnswer = eval(equationInput)
var piNumber = 3.14159

function alertNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  var lastpressed = instructionQueue.push(number);
  var equationInput = instructionQueue.join('')
  document.getElementById("javaoutput").innerHTML = equationInput
}

[].forEach.call(document.querySelectorAll('.number'), function(element) {
  element.addEventListener('click', alertNumber);
}, false);


function operatorPressed(event) {
  var button = event.target;
  var text = button.textContent;
  var lastoperator = instructionQueue.push(text);
  var equationInput = instructionQueue.join('')
}

[].forEach.call(document.querySelectorAll('.operator'), function(element) {
  element.addEventListener('click', operatorPressed);
}, false);

function equalPressed(event) {
  var button = event.target;
  var text = button.textContent;
  var equationInput = instructionQueue.join('')
  var equationAnswer = eval(equationInput)
  document.getElementById("javaoutput").innerHTML = equationAnswer
  instructionQueue = [equationAnswer];
}

[].forEach.call(document.querySelectorAll('.equal'), function(element) {
  element.addEventListener('click', equalPressed);
}, false);

function clearPressed(event) {
  var button = event.target;
  instructionQueue = []
  document.getElementById("javaoutput").innerHTML = "";
}

[].forEach.call(document.querySelectorAll('.clear'), function(element) {
  element.addEventListener('click', clearPressed);
}, false);

function signPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var numberChange = numberManipulate * -1
  instructionQueue.push(numberChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.sign'), function(element) {
  element.addEventListener('click', signPressed);
}, false);

function percentPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var percentChange = numberManipulate / 100
  instructionQueue.push(percentChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.percent'), function(element) {
  element.addEventListener('click', percentPressed);
}, false);

function squarePressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var powerChange = Math.pow(numberManipulate, 2)
  instructionQueue.push(powerChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.squared'), function(element) {
  element.addEventListener('click', squarePressed);
}, false);

function cubedPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var powerChange = Math.pow(numberManipulate, 3)
  instructionQueue.push(powerChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.cubed'), function(element) {
  element.addEventListener('click', cubedPressed);
}, false);

// function nPowerPressed(event) {
//   var button = event.target;
//   var numberManipulate = instructionQueue.pop();
//   var powerChange = Math.pow(numberManipulate,
//   instructionQueue.push(powerChange)
// }
//
// [].forEach.call(document.querySelectorAll('.npower'), function(element) {
//   element.addEventListener('click', nPowerPressed);
// }, false);

function squarerootPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var powerChange = Math.pow(numberManipulate, .5)
  instructionQueue.push(powerChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.squareroot'), function(element) {
  element.addEventListener('click', squarerootPressed);
}, false);

function cuberootPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var powerChange = Math.pow(numberManipulate, (1/3))
  instructionQueue.push(powerChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.cuberoot'), function(element) {
  element.addEventListener('click', cuberootPressed);
}, false);

function sinPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.sin(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.sin'), function(element) {
  element.addEventListener('click', sinPressed);
}, false);

function cosPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.cos(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.cos'), function(element) {
  element.addEventListener('click', cosPressed);
}, false);

function tanPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.tan(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.tan'), function(element) {
  element.addEventListener('click', tanPressed);
}, false);

function sinhPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.sinh(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.sinh'), function(element) {
  element.addEventListener('click', sinhPressed);
}, false);

function coshPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.cosh(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.cosh'), function(element) {
  element.addEventListener('click', coshPressed);
}, false);

function tanhPressed(event) {
  var button = event.target;
  var numberManipulate = instructionQueue.pop();
  var angleChange = Math.tanh(numberManipulate);
  instructionQueue.push(angleChange)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.tanh'), function(element) {
  element.addEventListener('click', tanhPressed);
}, false);

function piPressed(event) {
  var button = event.target;
  instructionQueue.push(piNumber)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.pi'), function(element) {
  element.addEventListener('click', piPressed);
}, false);

function ekeyPressed(event) {
  var button = event.target;
  var eNumber = 2.718281828
  instructionQueue.push(eNumber)
  document.getElementById("javaoutput").innerHTML = instructionQueue
}

[].forEach.call(document.querySelectorAll('.ekey'), function(element) {
  element.addEventListener('click', ekeyPressed);
}, false);
