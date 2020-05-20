const add = str => {
  const numbers = str.split(/,|\n/).map(Number)
  return numbers.reduce((a, b) => a + b, 0)
}

module.exports = add