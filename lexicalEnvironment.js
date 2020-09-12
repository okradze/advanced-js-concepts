// Lexical scope is variables that we can access

const printMyName = () => {
  return 'Mirian Okradze'
}

const findMyName = () => {
  const nestedFunc = () => {
    console.log('nested')
  }
  // can access here
  nestedFunc()
  return printMyName()
}

// cannot access nestedFunc outside of findMyName function

const sayMyName = () => {
  return findMyName()
}

console.log(sayMyName())