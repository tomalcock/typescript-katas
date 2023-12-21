export function highestNumber(numbers: number[]): number {
  let largest: number = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] > largest ? (largest = numbers[i]) : null
  }

  return largest
}
