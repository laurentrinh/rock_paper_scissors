let computer = 0;
let player = 0;
let round = 0;
let tie = 0;

function computerPlay() {
    let computerResult = ["Rock", "Paper", "Scissors"];
    return computerResult[Math.floor(Math.random()*3)];
}

function gameCheck() {
    if (player == 5) {
        text.textContent = "You Win!"
    }
    if (computer == 5 ) {
        text.textContent = "You Lose!"
    }
}