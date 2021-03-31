let resultsParagraph = document.getElementById('results');

let rockButton = document.getElementsByClassName("rockButton");
let paperButton = document.getElementsByClassName("paperButton");
let scissorsButton = document.getElementsByClassName("scissorsButton");

function computerPlay() {
    const initialRandom = Math.random();
    const multiplied = initialRandom * 3;
    const answer = Math.floor(multiplied);
    if (answer === 0) {
        // console.log("Rock");
        const Rock = "Rock";
        return Rock;
    } else if (answer === 1) {
        // console.log("Paper");
        const Paper = "Paper";
        return Paper;
    } else if (answer === 2) {
        // console.log("Scissors");
        const Scissors = "Scissors";
        return Scissors;
    }
}

function playerClickedRock() {
    let computerSelection = computerPlay();
    // console.log(computerSelection);
    if (computerSelection === "Rock") {
        resultsParagraph.innerHTML = "Rock: Draw";
        // return "Draw";
    } else if (computerSelection === "Paper") {
        // return "You Lose! Paper beats Rock";
        resultsParagraph.innerHTML = "Paper: You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
        // return "You Win! Rock beats Scissors";
        resultsParagraph.innerHTML = "Scissors: You Win! Rock beats Scissors";
    }
}

function playerClickedPaper() {
    let computerSelection = computerPlay();
    if (computerSelection === "Rock") {
        resultsParagraph.innerHTML = "Rock: You Win! Paper beats Rock";
    } else if (computerSelection === "Paper") {
        resultsParagraph.innerHTML = "Paper: Draw";
    } else if (computerSelection === "Scissors") {
        resultsParagraph.innerHTML = "Scissors: You Lose! Scissors beats Paper";
    }
}

function playerClickedScissors() {
    let computerSelection = computerPlay();
    if (computerSelection === "Rock") {
        resultsParagraph.innerHTML = "Rock: You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
        resultsParagraph.innerHTML = "Paper: You Win! Scissors beats Paper";
    } else if (computerSelection === "Scissors") {
        resultsParagraph.innerHTML = "Scissors: Draw";
    }
}
