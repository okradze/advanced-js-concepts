const subtractTwo = (num) => num - 2

const calculate = () => {
  const sum = 5 + 3
  return subtractTwo(sum) // adds subtractTwo function to call stack on top
}
// we declared our functions

calculate() // adds to call stack