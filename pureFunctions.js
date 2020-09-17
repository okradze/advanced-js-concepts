//Side effects:
const array = [1,2,3];
function removeLastItem(arr) {
  const newArray = [...array]
  newArray.pop()
  return newArray
}
function multiplyBy2(arr) {
  return arr.map(item => item*2)
}
//The order of the function calls will matter.
console.log(removeLastItem(array))
console.log(multiplyBy2(array))
console.log(array)

function a (num1, num2) {
  return num1 + num2
}
console.log(a(3, 4))