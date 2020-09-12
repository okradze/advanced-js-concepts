// inline caching
const findUser = (user) => {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'John',
  lastName: 'Doe'
}

// caches string findUser returns
findUser(userData)
findUser(userData)
findUser(userData)