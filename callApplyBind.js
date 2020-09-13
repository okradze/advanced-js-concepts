const wizard = {
  name: 'Merlin',
  health: 50,
  heal(amount1, amount2) {
    this.health += amount1 + amount2
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

console.log(archer)
// const healArcher = wizard.heal.bind(archer, 30, 20)
// healArcher()
wizard.heal.call(archer, 30, 20)
// wizard.heal.apply(archer, [30, 20])
console.log(archer)