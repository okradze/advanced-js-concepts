// factory functions

function createElf (name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return `attach with ${weapon}`
    }
  }
}

const peter = createElf('Peter', 'stones')
const sam = createElf('Sam', 'fire')
console.log(peter.attack())
console.log(sam.attack())