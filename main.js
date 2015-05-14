var instructionQueue = [];
var equationInput = instructionQueue.join('')
var equationAnswer = eval(equationInput)

function alertNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  var lastpressed = instructionQueue.push(number);
  document.getElementById("javaoutput").innerHTML = document.getElementById("javaoutput").innerHTML + number
}

[].forEach.call(document.querySelectorAll('.number'), function(element) {
  element.addEventListener('click', alertNumber);
}, false);


function operatorPressed(event) {
  var button = event.target;
  var text = button.textContent;
  var lastoperator = instructionQueue.push(text);
  document.getElementById("javaoutput").innerHTML = document.getElementById("javaoutput").innerHTML + text
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
}

[].forEach.call(document.querySelectorAll('.equal'), function(element) {
  element.addEventListener('click', equalPressed);
}, false);

function clearPressed(event) {
  var button = event.target;
  document.getElementById("javaoutput").innerHTML = "";
}

[].forEach.call(document.querySelectorAll('.clear'), function(element) {
  element.addEventListener('click', clearPressed);
}, false);

function signPressed(event) {
  var button = event.target;
  var signChange = instructionQueue.push(-1);
}

[].forEach.call(document.querySelectorAll('.sign'), function(element) {
  element.addEventListener('click', clearPressed);
}, false);
