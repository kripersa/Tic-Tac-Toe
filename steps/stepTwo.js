import { findThirdElementOfWinningCombination } from '../findFunc.js'

export const stepTwo = arr => {
  let third = findThirdElementOfWinningCombination(arr[0], arr[1])

  console.log(third)
  return third
}
