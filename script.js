/* Start the game by randomly selecting the computers choice and storing in variable called computerSelection*/
const choicesArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return choice;
}


let playerScore = 0;
let computerScore = 0;


/* Create a function that takes playerSelection and computerSelection and plays a round of the game */

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = (`You Win, ${playerSelection} beat ${computerSelection}!!!`);
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
        playerScore++;
    } else if (playerSelection == computerSelection) {
        result = (`You Tied!!! ${computerSelection} equals ${playerSelection}`);
        playerScore++;
        computerScore++;
    } else if (playerSelection != 'rock' || 'paper' || 'scissors') {
        result = (`You loose ${playerSelection} is not a valid guess`);
        computerScore++;
    } else {result = (`You loose, ${computerSelection} beats ${playerSelection}!!!`);
    computerScore++;
    }
    return result;
}


/*
let roundEndMessage = playRound(playerSelection.toLowerCase, computerSelection);
console.log(roundEndMessage); 
*/

function game(computerPlay,playRound) {

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
/* Is it actually radomly picking a valid option? */
        console.log(computerSelection);
/* Prompt the player to enter a selection and store in a variable called playerSelection */
        let playerSelection = prompt('Choose Wisely', '').toLowerCase();
/* Is it assigning to the variable as all lowercase? */
        console.log(playerSelection);
        let roundEndMessage = playRound(playerSelection, computerSelection);
        console.log(roundEndMessage);  
    }

}

let playGame = game(computerPlay,playRound);