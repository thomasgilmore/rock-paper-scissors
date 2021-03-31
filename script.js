function computerPlay() {
    const initialRandom = Math.random();
    const multiplied = initialRandom * 3;
    const answer = Math.floor(multiplied);
    if (answer === 0) {
        console.log("Rock");
    } else if (answer === 1) {
        console.log("Paper");
    } else if (answer === 2) {
        console.log("Scissors");
    }
}

computerPlay();