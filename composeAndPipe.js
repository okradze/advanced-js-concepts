const compose = (fn1, fn2) => (data) => fn1(fn2(data))
const pipe = (fn1, fn2) => (data) => fn2(fn1(data))
const multiplyBy3 = (num) => num * 3
const takePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, takePositive)
const multiplyBy3AndAbsolute = pipe(multiplyBy3, takePositive)

console.log(multiplyBy3AndAbsolute(-50))