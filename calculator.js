const add = str => {
  const numbers = str.split(',').map(Number)
  return numbers.reduce((a, b) => a + b, 0)
}

module.exports = add