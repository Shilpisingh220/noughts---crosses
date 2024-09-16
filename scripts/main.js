const resetBtn = document.querySelector(".btn-reset");
const gameGrid = document.querySelector(".game-grid");

const colors = ["orange", "blue", "red", "purple", "magenta", "yellow"];

let count = 0;

resetBtn.addEventListener("click", function () {
    console.log(count);
    if (count > 5) count = count -6;
    gameGrid.style.background = colors[count];
    count = count + 1;

});