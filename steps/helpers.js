export function mostRepetableInArray(arr) {
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
