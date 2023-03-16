export let winner = [];
let winningCompbinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinningCombinations = (numbers) => {
  return winningCompbinations.some((comb) => {
    let won = comb.every((el) => numbers.includes(el));

    if (won) {
      winner = comb;
      console.log("god game", winner);
      return comb;
    }
  });
};
