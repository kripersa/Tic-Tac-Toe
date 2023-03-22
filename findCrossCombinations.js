import { mostRepetableInArray } from "./steps/helpers.js";
import { winningCompbinations } from "./winningCombinations.js";

export const findCrossingCombinations = (n1, n2) => {
  let combs = [];
  let n1Combinations = findCombinationThatIncludes(n1);
  let n2Combinations = findCombinationThatIncludes(n2);
  let destructedN1 = destructCombinations(n1Combinations);
  let destructedN2 = destructCombinations(n2Combinations);
  destructedN1.forEach((n) => {
    n2Combinations.forEach((c) => {
      if (c.includes(n)) combs.push(c);
    });
  });
  destructedN2.forEach((n) => {
    n1Combinations.forEach((c) => {
      if (c.includes(n)) combs.push(c);
    });
  });

  return uniqueArrs(combs);
};

function findCombinationThatIncludes(n) {
  return winningCompbinations.filter((comb) => comb.includes(n));
}

const destructCombinations = (arr) => {
  let numbers = [];
  arr.forEach((n) => n.forEach((m) => numbers.push(m)));
  return numbers;
};

export const checkIfCombinationIsPossible = (xs, os) => {
  let crossingCombinations = findCrossingCombinations(xs[0], xs[1]);
  let filteredOs = crossingCombinations.filter((c) => !c.includes(os[0]));
  let destructured = destructCombinations(filteredOs);
  let filteredXs = destructured.filter((c) => c !== xs[0] && c !== xs[1]);

  return mostRepetableInArray(filteredXs);
};

function uniqueArrs(arrs) {
  for (let i = 0; i < arrs.length; i++) {
    for (let j = i + 1; j < arrs.length; j++) {
      if (
        arrs[i][0] === arrs[j][0] &&
        arrs[i][1] === arrs[j][1] &&
        arrs[i][2] === arrs[j][2]
      ) {
        arrs.splice(j, 1);
        j--;
      }
    }
  }
  return arrs;
}
