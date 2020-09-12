const arr = []

for(let i = 1; i > 0; i++) {
  arr.push(i)
}

// global variables
const a = 1
const b = 1
const c = 1

// event listeners
const element = document.querySelector('button')
element.addEventListener('click', (e) => {}) // keep adding event listeners and never removing
element.addEventListener('click', (e) => {}) // keep adding event listeners and never removing
element.addEventListener('click', (e) => {}) // keep adding event listeners and never removing
element.addEventListener('click', (e) => {}) // keep adding event listeners and never removing

// setInterval
setInterval(() => {
  
}, 1000); // not removing interval causes leak