const multiplyBy = (num1) => {
  return (num2) => num1 * num2
}

const multiplyByTwo = multiplyBy(2)
const multiplyByFive = multiplyBy(5)
multiplyByTwo(4)
multiplyByFive(2)