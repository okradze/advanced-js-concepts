// Global execution context gives us Global object and this keyword and it is same

const printMyName = () => {
  return 'Mirian Okradze'
}

const findMyName = () => {
  return printMyName()
}

const sayMyName = () => {
  return findMyName()
}

console.log(sayMyName())