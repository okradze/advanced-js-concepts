class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  attack() {
    return `attach with ${this.weapon}`
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort() {
    return 'strongest fort'
  }
}

const peter = new Elf('Peter', 'stones', 'house')
const ogre = new Ogre('Ogre', 'sword', 'green')
console.log(peter.attack())
console.log(ogre.makeFort())