import { winningCompbinations } from './winningCombinations.js'

// export const findCrossingCombinations = (n1, n2) => {
//   let n1Combinations = findCombinationThatIncludes(n1)
//   let n2Combinations = findCombinationThatIncludes(n2)
//   let destructedN1 = destructCombinations(n1Combinations)
//   let destructedN2 = destructCombinations(n2Combinations)
//   console.log({ destructedN1 })
//   return destructedN1
//     .filter(el => destructedN2.includes(el))
//     .filter((value, index, array) => array.indexOf(value) === index)
//     .filter(value => value !== n1 && value !== n2)
// }

export const findCrossingCombinations = (n1, n2) => {
  let combs = []
  let n1Combinations = findCombinationThatIncludes(n1)
  let n2Combinations = findCombinationThatIncludes(n2)
  let destructedN1 = destructCombinations(n1Combinations)
  let destructedN2 = destructCombinations(n2Combinations)
  destructedN1.forEach(n => {
    n2Combinations.forEach(c => {
      if (c.includes(n)) combs.push(c)
    })
  })
  destructedN2.forEach(n => {
    n1Combinations.forEach(c => {
      if (c.includes(n)) combs.push(c)
    })
  })

  return uniqueArrs(combs)
}

function findCombinationThatIncludes(n) {
  return winningCompbinations.filter(comb => comb.includes(n))
}

const destructCombinations = arr => {
  let numbers = []
  arr.forEach(n => n.forEach(m => numbers.push(m)))
  return numbers
}

export const checkIfCombinationIsPossible = (xs, os) => {
  let crossingCombinations = findCrossingCombinations(xs[0], xs[1])
  console.log({ crossingCombinations })
  let filteredOs = crossingCombinations.filter(c => !c.includes(os[0]))
  console.log({ filteredOs })
  // let filteredXs = crossingCombinations.filter(c => !c.includes(os[0]))
  let destructured = destructCombinations(filteredOs)
  let filteredXs = destructured.filter(c => c !== xs[0] && c !== xs[1])

  return highestQuantity(filteredXs)
}

function uniqueArrs(arrs) {
  for (let i = 0; i < arrs.length; i++) {
    for (let j = i + 1; j < arrs.length; j++) {
      if (
        arrs[i][0] === arrs[j][0] &&
        arrs[i][1] === arrs[j][1] &&
        arrs[i][2] === arrs[j][2]
      ) {
        arrs.splice(j, 1)
        j--
      }
    }
  }
  return arrs
}

function highestQuantity(arr) {
  let obj = {}
  arr.forEach(el => {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }
  })

  const arr2 = Object.entries(obj)

  arr2.sort((a, b) => b[1] - a[1])
  return +arr2[0][0]
}
