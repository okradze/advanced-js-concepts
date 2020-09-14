// Memory efficient

// function heavyDuty(item) {
//   const bigArray = new Array(7000).fill('G')
//   return bigArray[item]
// }

// console.log(heavyDuty(902))
// console.log(heavyDuty(92))
// console.log(heavyDuty(298))
// console.log(heavyDuty(428))

function heavyDuty() {
  const bigArray = new Array(7000).fill('G')
  return function(item) {
    return bigArray[item]
  }
}

const heavy = heavyDuty()

console.log(heavy(902))
console.log(heavy(92))
console.log(heavy(298))
console.log(heavy(428))