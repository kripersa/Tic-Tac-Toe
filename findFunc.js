import { winningCompbinations } from "./winningCombinations.js";

const findCombination = (n1, n2) => {
  return winningCompbinations.find(
    (comb) => comb.includes(n1) && comb.includes(n2)
  );
};

export const findThirdElementOfWinningCombination = (n1, n2) => {
  let combination = findCombination(n1, n2);
  if (!combination) return;
  return combination.find((el) => el !== n1 && el !== n2);
};

export const findEveryWinningTwoElementsArray = (numbers) => {
  return createTwoElementsArrays(numbers).filter((arr) => {
    return findCombination(arr[0], arr[1]);
  });
};
