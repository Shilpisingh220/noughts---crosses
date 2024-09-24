import chances from "./chances.js";

console.log(chances);

// const fruits = ["apple", "kiwi", "banana", "mango", "cheeku"];

// const a = fruits.unshift();

// console.log(a);

// function getbetween(input) {
//     return input.slice(1, input.lenght -1);
// }

// const x = getbetween(fruits);
// console.log(x);

// console.log(getbetween([1, 2, 3, 4, 5]));

// const fruits = ["apple", "kiwi", "banana", "mango", "cheeku"];

// const z = fruits.join("-")

// console.log(z);

// function table(num) {
//     for (let i = 1; i <= 10; i++){
//         console.log(`${num}x${i}=${num * i}`);
//     }

// }

// table(3);

// const num = [1, 2, 3, 4,]
// for (let j = 0; j < nums.length; j++) {
//     nums[j] = num[j]*2
// }

// console.log(num)

// const nums = [1, 20,32,443]
// nums.forEach(function (v, idk) {
//     nums[idk] = v * 2;

// });

// console.log(nums);

// const nums = [2,4,6,8]
// numsEven = [flase,true,flase,true]

// const evenNums = nums.map (function (value) {
//     if (value % 2 == 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
//     }

// });

// console.log(evenNums);

// const evenNums = [];
// nums.forEach()

const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

console.log(boxes);
// game variable
const players = ["0", "x"];
let currPlayer = "0";
let virtualGrid;

function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return players[rn];
}

function swapPlayer() {
  const newPlayer = currPlayer === "0" ? "x" : "0";
  currPlayer = newPlayer;
  currentPlayerEl.textContent = newPlayer;
}

function startGame() {
  currPlayer = getPlayer();
  virtualGrid = new Array(9).fill("");
  currentPlayerEl.textContent = currPlayer;
}

function checkIfWon(){
  
}

function handleBoxClick(input) {
  if (virtualGrid[input] === ""){
    console.log(input);
  boxes[input].textContent = currPlayer;
  boxes[input].style.cursor = "auto";
  virtualGrid[input] = currPlayer;
  console.log(virtualGrid);
  swapPlayer();
  }
}


console.log(boxes);

boxes.forEach(function (box, index) {
  box.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  alert("hey");
}

resetBtn.addEventListener("click", handleReset);

document.addEventListener("DOMContentLoaded", startGame);
