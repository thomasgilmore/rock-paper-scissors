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
        resultsParagraph.innerHTML = "Draw";
        // return "Draw";
    } else if (computerSelection === "Paper") {
        // return "You Lose! Paper beats Rock";
        resultsParagraph.innerHTML = "You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
        // return "You Win! Rock beats Scissors";
        resultsParagraph.innerHTML = "You Win! Rock beats Scissors";
    }

}

