function marry(...args) {
  // console.log(Array.from(arguments))
  console.log(args)
  return `${args[0]} is married to ${args[1]}`
}

console.log(marry('Viktor', 'Janie'))