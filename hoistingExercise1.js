// favouriteFood gets hoisted in this execution context
// favouriteFood = undefined
// foodThoughts = undefined
var favouriteFood = 'grapes'

var foodThoughts = function () {
  // favouriteFood gets hoisted in this execution context. it will be undefined
  // favouriteFood = undefined
  console.log('Original favourite food: ' + favouriteFood)

  var favouriteFood = 'sushi'

  console.log('New favourite food: ' + favouriteFood)
}

foodThoughts()

// P.s. when you change the 'var' to 'const' technically there is still hoisting happening.
// That is why you get a reference error instead of looking at the global favouriteFood variable. 
// let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
// So the engine says, "ya there is a favouriteFood variable here but you can't access it yet"
