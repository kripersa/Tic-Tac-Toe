import { checkIfCombinationIsPossible } from '../findCrossCombinations.js'
import { findThirdElementOfWinningCombination } from '../findFunc.js'

export const stepTwo = (arr, arr2) => {
  let third = findThirdElementOfWinningCombination(arr[0], arr[1])

  if (third && third !== arr2[0]) return third
  return checkIfCombinationIsPossible(arr, arr2)
}
