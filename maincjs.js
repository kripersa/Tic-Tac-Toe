import { checkWinningCombinations } from "./checkwin.js";
import { winner } from "./checkwin.js";

let restartButton = document.querySelector("#restartButton");
let boxes = Array.from(document.getElementsByClassName("box"));
let x = "X";
let o = "O";
let nextLetter = x;
let boxAll = document.querySelectorAll(".cl");
let arrNew = Array.from(boxAll);
let xChoises = [];
let oChoises = [];

boxes.forEach(callBack);

function callBack(box, index) {
  box.addEventListener("click", function (e) {
    e.target.innerHTML = nextLetter;
    e.target.className = `box ${nextLetter}-box`;
    if (nextLetter == x) {
      xChoises.push(index);
      nextLetter = o;
    } else {
      nextLetter = x;
      oChoises.push(index);
    }
    if (checkWinningCombinations(xChoises)) {
      boxes[winner[0]].classList.add("winnerBox");
      boxes[winner[1]].classList.add("winnerBox");
      boxes[winner[2]].classList.add("winnerBox");
    }
    if (checkWinningCombinations(oChoises)) {
      boxes[winner[0]].classList.add("winnerBox");
      boxes[winner[1]].classList.add("winnerBox");
      boxes[winner[2]].classList.add("winnerBox");
    }
  });
}
restartButton.addEventListener("click", function (b) {
  for (let i of arrNew) {
    i.innerHTML = "";
    nextLetter = x;
    xChoises = [];
    oChoises = [];
    boxes[winner[0]].classList.remove("winnerBox");
    boxes[winner[1]].classList.remove("winnerBox");
    boxes[winner[2]].classList.remove("winnerBox");
  }
});
