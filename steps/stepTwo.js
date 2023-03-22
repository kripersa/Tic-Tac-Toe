import { checkIfCombinationIsPossible, findCrossingCombinations } from '../findCrossCombinations.js'
import { findThirdElementOfWinningCombination } from '../findFunc.js'

export const stepTwo = (arr, arr2) => {
  let third = findThirdElementOfWinningCombination(arr[0], arr[1])

  if (third) return third

  return checkIfCombinationIsPossible(arr, arr2)
  // let crossing = findCrossingCombinations(arr[0], arr[1])
  // console.log({ crossing })
  // console.log({ arr, arr2 })
  // let filterCurrentBoxes = crossing.filter(
  //   el => !arr.includes(el) && !arr2.includes(el),
  // )
  // console.log({ filterCurrentBoxes })
}
