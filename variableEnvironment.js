function two() {
  var isValid // undefined
}

function one() {
  var isValid = true // local environment
  two() // new execution context
}

var isValid = false
one() // new execution context


// two() - isValid = undefined
// one() - isValid = true
// global() - isValid = false, one and two functions