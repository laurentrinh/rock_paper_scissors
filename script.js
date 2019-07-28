let computer = 0;
let player = 0;
let round = 0;
let tie = 0;

function computerPlay() {
    let computerResult = ["Rock", "Paper", "Scissors"];
    return computerResult[Math.floor(Math.random()*3)];
}

function playRound(playerSelection) {
    const text = document.getElementById("#text");
    const roundNum = document.getElementById("#roundNum");
    const playerWin = document.getElementById("#playerWin");
    const compWin = document.getElementById("#compWin");
    const ties = document.getElementById("#ties");

    let playerSelection = playerSelection.target.id;
    let computerSelection = computerPlay();
    round++;
    roundNum.textContent = round;

    if(playerSelection == computerSelection) {
        tie++;
        text.textContent = "Tie!"
        ties.textContent = tie;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
            (playerSelection == "Paper" && computerSelection == "Scissors") ||
            (playerSelection == "Scissors" && computerSelection == "Rock")) {
                computer++;
                text.textContent = computerSelection " beats " playerSelection;
                compWin.textContent = computer;
            }
    else {
        player++;
        text.textContent = playerSelection " beats " computerSelection;
        playerWin.textContent = player;
    }

    gameCheck();
}

function gameCheck() {
    if (player == 5) {
        text.textContent = "You Win!"
    }
    if (computer == 5 ) {
        text.textContent = "You Lose!"
    }
} 

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    img.addEventListener('click', playRound);
});
