let computer = 0,
    player = 0,
    round = 0,
    tie = 0;

function computerPlay() {
    let computerResult = ["Rock", "Paper", "Scissors"];
    return computerResult[Math.floor(Math.random()*3)];
}

function resetButton() {
    document.getElementById("scoring").reset();
}

function playRound(playerSelection) {
    const text = document.querySelector("#text");
    const roundNum = document.querySelector("#roundNum");
    const playerWin = document.querySelector("#playerWin");
    const compWin = document.querySelector("#compWin");
    const ties = document.querySelector("#ties");

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
                text.textContent = ""+computerSelection+" beats "+playerSelection+"!";
                compWin.textContent = computer;
            }
    else {
        player++;
        text.textContent = ""+playerSelection+" beats "+computerSelection+"!";
        playerWin.textContent = player;
    }

    gameCheck();
}

function gameCheck() {
    if (player == 5) {
        text.textContent = "You Win!";
    }
    if (computer == 5 ) {
        text.textContent = "You Lose!";
    }
} 

