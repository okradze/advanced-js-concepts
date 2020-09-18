// Callback Queue - Task Queue

setTimeout(() => {
  console.log('1')
}, 0)
setTimeout(() => {
  console.log('2')
}, 0)

// Job Queue - Microtask Queue - Higher priority than Callback Queue
Promise.resolve().then(() => {
  console.log('3')
})

console.log('4')