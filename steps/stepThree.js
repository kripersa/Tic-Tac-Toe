import { checkIfCombinationIsPossible } from '../findCrossCombinations.js'
import { findThirdElementOfWinningCombination } from '../findFunc.js'

export const stepThree = (playerChoises, cpuChoises) => {
  let isWinning = findThirdElementOfWinningCombination(
    cpuChoises[0],
    cpuChoises[1],
  )

  if (isWinning || isWinning === 0) {
    if (!playerChoises.includes(isWinning)) return isWinning
  }

  let third = findThirdElementOfWinningCombination(
    playerChoises[0],
    playerChoises[1],
  )

  console.log({ third })
  if (
    !playerChoises.includes(third) &&
    !cpuChoises.includes(third) &&
    !!third
  ) {
    return third
  }

  let third2 = findThirdElementOfWinningCombination(
    playerChoises[1],
    playerChoises[2],
  )
  console.log({ third2 })
  console.log({ playerChoises })
  console.log({ cpuChoises })

  if (
    !playerChoises.includes(third2) &&
    !cpuChoises.includes(third2) &&
    !!third2
  ) {
    return third2
  }

  let third3 = findThirdElementOfWinningCombination(
    playerChoises[0],
    playerChoises[2],
  )
  console.log({ third3 })
  if (
    !playerChoises.includes(third3) &&
    !cpuChoises.includes(third3) &&
    !!third3
  ) {
    return third3
  }
  console.log('aq shemodis')
  return checkIfCombinationIsPossible(playerChoises, cpuChoises)
}
