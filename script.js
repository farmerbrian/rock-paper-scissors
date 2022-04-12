/* Start the game by randomly selecting the computers choice and storing in variable called computerSelection*/
const choicesArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return choice;
}

let computerSelection = computerPlay();

/* Is it randomly choosing properly for the computer? */
console.log(computerSelection);


/* Prompt the player to enter a selection and store in a variable called playerSelection */


/* Create a function that takes playerSelection and computerSelection and plays a round of the game */

/*
function playRound()
*/