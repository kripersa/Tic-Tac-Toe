import {
  checkIfCombinationIsPossible,
  findCrossingCombinations,
} from "../findCrossCombinations.js";
import { findThirdElementOfWinningCombination } from "../findFunc.js";

export const stepTwo = (arr, arr2) => {
  let third = findThirdElementOfWinningCombination(arr[0], arr[1]);

  if (third) return third;

  return checkIfCombinationIsPossible(arr, arr2);
};
