const Animal = (x, y) => {
  this.x = x
  this.y = y
}

const animal1 = new Animal(1, 2)
const animal2 = new Animal(3, 4)

animal1.a = 30
animal1.b = 100

animal2.b = 30
animal2.a = 100

// add keywords in same order or initialize in constructor function