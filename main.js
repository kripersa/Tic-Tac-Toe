import { checkWinningCombinations } from './checkwin.js'
import { winner } from './checkwin.js'
import { stepOne } from './steps/stepOne.js'
import { stepThree } from './steps/stepThree.js'
import { stepTwo } from './steps/stepTwo.js'

let restartButton = document.querySelector('#restartButton')
let boxes = Array.from(document.getElementsByClassName('box'))
let x = 'X'
let o = 'O'
let nextLetter = x
let boxAll = document.querySelectorAll('.cl')
let arrNew = Array.from(boxAll)
let xChoises = []
let oChoises = []
let step = 0

boxes.forEach(callBack)

function callBack(box, index) {
  box.addEventListener('click', function (e) {
    fillTheBox('x', index)

    step++
    console.log({ step })
    switch (step) {
      case 1:
        let cpuChoise1 = stepOne(xChoises[0])
        console.log({ cpuChoise1 })
        fillTheBox('o', cpuChoise1)
        break
      case 2:
        let cpuChoise2 = stepTwo(xChoises, oChoises)
        console.log({ cpuChoise2 })
        fillTheBox('o', cpuChoise2)
        break
      case 3:
        let cpuChoise3 = stepThree(xChoises, oChoises)
        console.log({ cpuChoise3 })
        fillTheBox('o', cpuChoise3)
        break

      default:
        console.log('arc ertshi ar shevida')
        break
    }

    if (checkWinningCombinations(xChoises)) {
      winner.forEach(el => boxes[winner[el]].classList.add('winnerBox'))
    }

    if (checkWinningCombinations(oChoises)) {
      boxes[winner[0]].classList.add('winnerBox')
      boxes[winner[1]].classList.add('winnerBox')
      boxes[winner[2]].classList.add('winnerBox')
    }
  })
}

restartButton.addEventListener('click', function (b) {
  for (let i of arrNew) {
    i.innerHTML = ''
    nextLetter = x
    xChoises = []
    oChoises = []
    boxes[winner[0]].classList.remove('winnerBox')
    boxes[winner[1]].classList.remove('winnerBox')
    boxes[winner[2]].classList.remove('winnerBox')
  }
})

const fillTheBox = (content, index) => {
  arrNew[index].innerHTML = content === 'x' ? '×' : '○'
  arrNew[index].className = `box ${content}-box`
  if (content === 'x') {
    xChoises.push(index)
  } else {
    oChoises.push(index)
  }
}
