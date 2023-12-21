import { describe, test, expect } from 'vitest'
import { highestNumber } from '../my-solutions/highestNumber'

describe('highestNumber', () => {
  test('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = highestNumber(given)

    expect(actual).toBe(42)
  })

  test('should get the highest number given an array of two numbers', () => {
    expect(highestNumber([37, 42])).toBe(42)
    expect(highestNumber([42, 37])).toBe(42)
  })

  test('should get the highest number given an array of more than two numbers', () => {
    expect(highestNumber([37, 42, 36])).toBe(42)
    expect(highestNumber([42, 37, 36, 48])).toBe(48)
  })
})
