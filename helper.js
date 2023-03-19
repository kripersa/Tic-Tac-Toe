const findEveryWinningTwoElementsArray = numbers => {
  return createTwoElementsArrays(numbers).filter(arr => {
    return findCombination(arr[0], arr[1])
  })
}
