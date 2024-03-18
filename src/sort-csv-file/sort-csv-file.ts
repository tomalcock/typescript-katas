export function sortCsvColumns(csvFileContent: string): string {
  const arrOfRows = csvFileContent.split('\n')

  const firstRowArr = arrOfRows[0].split(';')
  const secondRowArr = arrOfRows[1].split(';')
  const thirdRowArr = arrOfRows[2].split(';')

  const firstColArr = [firstRowArr[0], secondRowArr[0], thirdRowArr[0]]
  const secondColArr = [firstRowArr[1], secondRowArr[1], thirdRowArr[1]]
  const thirdColArr = [firstRowArr[2], secondRowArr[2], thirdRowArr[2]]
  const fourthColArr = [firstRowArr[3], secondRowArr[3], thirdRowArr[3]]

  const orderedFirstRow = firstRowArr.sort()

  let NewFirstCol: string[] = []
  let NewSecondCol: string[] = []
  let NewThirdCol: string[] = []
  let NewFourthCol: string[] = []

  for (let i = 0; i < 4; i++) {
    if (orderedFirstRow[i] === firstColArr[0]) {
      i === 0 ? (NewFirstCol = firstColArr) : null
      i === 1 ? (NewSecondCol = firstColArr) : null
      i === 2 ? (NewThirdCol = firstColArr) : null
      i === 3 ? (NewFourthCol = firstColArr) : null
    }

    if (orderedFirstRow[i] === secondColArr[0]) {
      i === 0 ? (NewFirstCol = secondColArr) : null
      i === 1 ? (NewSecondCol = secondColArr) : null
      i === 2 ? (NewThirdCol = secondColArr) : null
      i === 3 ? (NewFourthCol = secondColArr) : null
    }
    if (orderedFirstRow[i] === thirdColArr[0]) {
      i === 0 ? (NewFirstCol = thirdColArr) : null
      i === 1 ? (NewSecondCol = thirdColArr) : null
      i === 2 ? (NewThirdCol = thirdColArr) : null
      i === 3 ? (NewFourthCol = thirdColArr) : null
    }
    if (orderedFirstRow[i] === fourthColArr[0]) {
      i === 0 ? (NewFirstCol = fourthColArr) : null
      i === 1 ? (NewSecondCol = fourthColArr) : null
      i === 2 ? (NewThirdCol = fourthColArr) : null
      i === 3 ? (NewFourthCol = fourthColArr) : null
    }
  }

  const newFirstRow = [NewFirstCol[0], NewSecondCol[0], NewThirdCol[0], NewFourthCol[0]]

  const newSecondRow = [NewFirstCol[1], NewSecondCol[1], NewThirdCol[1], NewFourthCol[1]]

  const newThirdRow = [NewFirstCol[2], NewSecondCol[2], NewThirdCol[2], NewFourthCol[2]]

  const newFirstRowStr = newFirstRow.join(';') + '\n'
  const newSecondRowStr = newSecondRow.join(';') + '\n'
  const newThirdRowStr = newThirdRow.join(';')

  const finalStr = newFirstRowStr + newSecondRowStr + newThirdRowStr

  return finalStr
}

// split the strings at the /n symbols so we have an array for each row
// remove the /n from each row
// join elements to create arrays for each column
// sort the first row array into alphabetical order

// By using the sorted array as a reference, use the column arrays to build the strings for each row back up
// join the new rows back to from a string for each row
// add a /n at the end of each new row
