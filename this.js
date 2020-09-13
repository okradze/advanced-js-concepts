const obj = {
  firstName: 'Mirian',
  lastName: 'Okradze',
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(obj.fullName())

function importantPerson() {
  console.log(this.name)
}

const name = 'Sally'

const person1 = {
  name: 'Mirian',
  importantPerson
}

const person2 = {
  name: 'Jamie',
  importantPerson
}
importantPerson()
person1.importantPerson()
person2.importantPerson()