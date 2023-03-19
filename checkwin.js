import { winningCompbinations } from './winningCombinations.js'
export let winner = []

export const checkWinningCombinations = numbers => {
  return winningCompbinations.some(comb => {
    let won = comb.every(el => numbers.includes(el))

    if (won) {
      winner = comb
      console.log('god game', winner)
      return comb
    }
  })
}
