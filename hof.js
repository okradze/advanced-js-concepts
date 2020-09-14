// Higher order function is function which takes function as an argument or returns function

const giveAccessTo = (name) => `Access Granted to ${name}`

function authenticate(time) {
  let arr = []
  for(let i = 0; i < time; i++) {
    arr.push(i)
  }
  return true
}

function letPerson(person, fn) {
  if(person.level === 'admin') {
    fn(500000000)
  } else if(person.level === 'user') {
    fn(100000000)
  }
  return giveAccessTo(person.name)
}

console.log(letPerson({ level: 'User', name: 'Adam' }, authenticate))
console.log(letPerson({ level: 'Admin', name: 'Eva' }, authenticate))