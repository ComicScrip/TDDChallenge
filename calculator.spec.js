const add = require('./calculator')

describe('calculator', () => {
  it('returns 0 given an empty string', () => {
    expect(add("")).toBe(0)
  })

  it('returns the number if only one number is given', () => {
    expect(add("42")).toBe(42)
  })

  it('should take up to two numbers, separated by commas, and return their sum', () => {
    expect(add("1,2")).toBe(3)
  })

  it('should handle an unknown amount of numbers', () => {
    expect(add("1,2,5,7")).toBe(15)
  })
})