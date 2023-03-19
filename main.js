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
    // e.target.innerHTML = nextLetter === 'X' ? '×' : '○'
    e.target.innerHTML = '×'
    e.target.className = `box X-box`
    // if (nextLetter == x) {
    xChoises.push(index)
    //   nextLetter = o
    // } else {
    //   nextLetter = x
    //   oChoises.push(index)
    // }

    step++
    console.log({ step })
    switch (step) {
      case 1:
        let cpuChoise1 = stepOne(xChoises[0])
        arrNew[cpuChoise1].innerHTML = '○'
        arrNew[cpuChoise1].className = `box O-box`

        oChoises.push(cpuChoise1)
        console.log({ cpuChoise1 })
        break
      case 2:
        let cpuChoise2 = stepTwo(xChoises)
        console.log({ cpuChoise2 })

        arrNew[cpuChoise2].innerHTML = '○'
        arrNew[cpuChoise2].className = `box O-box`

        oChoises.push(cpuChoise2)
        break
      case 3:
        let cpuChoise3 = stepThree(xChoises, oChoises)
        console.log({ cpuChoise3 })
        
        arrNew[cpuChoise3].innerHTML = '○'
        arrNew[cpuChoise3].className = `box O-box`

        oChoises.push(cpuChoise3)
        break

      default:
        break
    }

    if (checkWinningCombinations(xChoises)) {
      boxes[winner[0]].classList.add('winnerBox')
      boxes[winner[1]].classList.add('winnerBox')
      boxes[winner[2]].classList.add('winnerBox')
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
