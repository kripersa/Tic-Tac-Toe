import { findThirdElementOfWinningCombination } from '../findFunc.js'
import { createTwoElementsArrays } from '../createTwoElementsArrayss.js'

export const stepFour = (playerChoises, cpuChoises) => {
  //   console.log(createTwoElementsArrays(playerChoises))
  let arrs = createTwoElementsArrays(cpuChoises)
  console.log(arrs)

  let isWinning = arrs.find(arr => {
    console.log(findThirdElementOfWinningCombination(arr[0], arr[1]))
    if (
      !playerChoises.includes(
        findThirdElementOfWinningCombination(arr[0], arr[1]),
      )
    ) {
      return findThirdElementOfWinningCombination(arr[0], arr[1])
    }
  })
  console.log({ isWinning })

  if (isWinning) {
    return findThirdElementOfWinningCombination(isWinning[0], isWinning[1])
  }
  let arrs2 = createTwoElementsArrays(playerChoises)

  let isLosing = arrs2.find(arr => {
    console.log(findThirdElementOfWinningCombination(arr[0], arr[1]))
    if (
      !cpuChoises.includes(findThirdElementOfWinningCombination(arr[0], arr[1]))
    ) {
      return findThirdElementOfWinningCombination(arr[0], arr[1])
    }
  })

  if (isLosing) {
    return findThirdElementOfWinningCombination(isLosing[0], isLosing[1])
  }

  // randomad oridan erTi
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].find(n => {
    return !playerChoises.includes(n) && !cpuChoises.includes(n)
  })
}
