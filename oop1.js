// Constructor functions

function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf.prototype.attack = function() {
  return `attack with ${this.weapon}`
}

const peter = new Elf('Peter', 'stones')
console.log(peter.__proto__)
console.log(Elf.prototype)