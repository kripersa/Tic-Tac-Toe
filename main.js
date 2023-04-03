import { checkWinningCombinations } from "./checkwin.js";
import { winner } from "./checkwin.js";
import { stepOne } from "./steps/stepOne.js";
import { stepThree } from "./steps/stepThree.js";
import { stepTwo } from "./steps/stepTwo.js";
let box = document.querySelector(".box");
let restartButton = document.querySelector("#restartButton");
let boxes = Array.from(document.getElementsByClassName("box"));
let x = "X";
let o = "O";
let nextLetter = x;
export let arrNew = Array.from(boxes);
let xChoises = [];
let oChoises = [];
let step = 0;
let fireworkdiv = document.querySelector(".fireworkdiv");
let playerscore = 0;
let scorediv1 = document.querySelector(".scorediv1");
let cpuscore = 0;
let scorediv2 = document.querySelector(".scorediv2")




  scorediv1.innerHTML = 0
  scorediv2.innerHTML = 0

boxes.forEach(callBack);


function callBack(box, index) {
  box.addEventListener("click", function (e) {
    fillTheBox("x", index);

    step++;

    switch (step) {
      case 1:
        let cpuChoise1 = stepOne(xChoises[0]);

        fillTheBox("o", cpuChoise1);
        break;
      case 2:
        let cpuChoise2 = stepTwo(xChoises, oChoises);

        fillTheBox("o", cpuChoise2);
        break;
      case 3:
        let cpuChoise3 = stepThree(xChoises, oChoises);

        fillTheBox("o", cpuChoise3);
        break;

      default:
        break;
    }

    if (checkWinningCombinations(xChoises)) {
      winner.forEach((el) => boxes[el].classList.add("winnerBox"));
      fireworkdiv.style.display = "block";
      cpuscore ++ 
      
      
    }
    if (checkWinningCombinations(oChoises)) {
      winner.forEach((el) => boxes[el].classList.add("winnerBox"));
      fireworkdiv.style.display = "block";
      cpuscore ++ 
      scorediv2.innerHTML = cpuscore 
      console.log(cpuscore)
      
    }
  });
}

restartButton.addEventListener("click", function (b) {
  for (let i of arrNew) {
    i.innerHTML = "";
    nextLetter = x;
    xChoises = [];
    oChoises = [];
    step = 0;
    fireworkdiv.style.display = "none";
    winner.forEach((el) => boxes[el].classList.remove("winnerBox"));

    arrNew.forEach((el) => el.classList.remove("x-box", "o-box"));
  }
});

const fillTheBox = (content, index) => {
 
  arrNew[index].innerHTML = content === "x" ? "×" : "○";
  arrNew[index].className = `box ${content}-box`;
  if (content === "x") {
    xChoises.push(index);
  } else {
    oChoises.push(index);
  }
};

