const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const item1 = {
  name: 'Earphones',
  price: 50
}

const item2 = {
  name: 'Laptop',
  price: 1500
}

const getItemWithTax = (item) => {
  return {
    ...item,
    price: item.price + item.price * 0.03
  }
}

const addItemToCart = (user, item) => {
  const itemWithTax = getItemWithTax(item)
  user.cart.push(itemWithTax)
}

addItemToCart(user, item2)
addItemToCart(user, item1)

const buyItemFromCart = (user) => {
  user.purchases = [...user.purchases, ...user.cart]
  user.cart = []
}

buyItemFromCart(user)

const emptyCart = (user) => {
  user.cart = []
}

addItemToCart(user, item1)
addItemToCart(user, item2)
emptyCart(user)

console.log(user)