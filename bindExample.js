function multiply(x, y) {
  return x * y
}

const multiplyByTwo = multiply.bind(this, 2)
const multiplyByTen = multiply.bind(this, 10)
console.log(multiplyByTwo(4))
console.log(multiplyByTen(4))