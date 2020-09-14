const dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if(this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

const lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

lizard.__proto__ = dragon
console.log(dragon.isPrototypeOf(lizard))