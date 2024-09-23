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


function getPlayer() {
    const rn = math.floor(Math.random() *2);
    return players[rn];
}

function swapPlayer(){
    currPlayer = currPlayer === "0" ? "x" : "0" ;
  }

function handleClick(input) {
    input.textContent = currPlayer;
    swapPlayer();
    currentPlayerEl.textContent = currPlayer;
}

// only the first one
boxes.forEach(function (box) {
box.addEventListener("click", function (){
       handleClick(box);
});
});

