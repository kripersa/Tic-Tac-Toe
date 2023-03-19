import { findThirdElementOfWinningCombination } from '../findFunc.js'

export const stepThree = (playerChoises, cpuChoises) => {
  let isWinning = findThirdElementOfWinningCombination(
    cpuChoises[0],
    cpuChoises[1],
  )
  console.log(isWinning)
  if (isWinning || isWinning === 0) {
    return isWinning
  }

  return findThirdElementOfWinningCombination(
    playerChoises[0],
    playerChoises[1],
  )
}
