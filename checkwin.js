import { winningCompbinations } from "./winningCombinations.js";
import { arrNew } from "./main.js";
export let winner = [];

export const checkWinningCombinations = (numbers) => {
  return winningCompbinations.some((comb) => {
    let won = comb.every((el) => numbers.includes(el));

    if (won) {
      arrNew.forEach((el) => el.classList.add("x-box"));
      winner = comb;
      return comb;
    }
  });
};
