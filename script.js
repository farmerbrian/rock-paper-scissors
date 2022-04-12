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

let playerSelection = prompt('Choose Wisely', '');

console.log(playerSelection);
/* Create a function that takes playerSelection and computerSelection and plays a round of the game */

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = (`You Win, ${playerSelection} beat ${computerSelection}!!!`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
    } else if (playerSelection == computerSelection) {
        result = (`You Tied!!!`);
    } else {result = (`You loose, ${computerSelection} beats ${playerSelection}!!!`);
    }
    return result;
}

let roundEndMessage = playRound(playerSelection.toLowerCase, computerSelection.toLowerCase);
console.log(roundEndMessage);