// Scope chain gives functions access to variables that are defined outside

var x = 'x'

function findName() {
  console.log(x)
  var b = 'b';
  return printName();
}

function printName() {
  console.log(x)
  var c = 'c'
  return 'Andrei Neagoie'
}

function sayMyName() {
  console.log(x)
  var a = 'a';
  return findName()
}

sayMyName()
