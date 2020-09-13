// hoisting sets teddy variable to undefined and allocates memory.
// sign function hoisted
// sign2 will be undefined
console.log(teddy)
console.log(sing())
// console.log(sing2())

var teddy = 'bear'

// function expression
var sing2 = function () {
  console.log('la la')
}

// function declaration
function sing() {
  console.log('la la la')
}