/* Start the game by randomly selecting the computers choice and storing in variable called computerSelection*/
const choicesArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return choice;
}

/*let computerSelection = computerPlay();

 Is it randomly choosing properly for the computer? 
console.log(computerSelection);
*/
/* Prompt the player to enter a selection and store in a variable called playerSelection 

let playerSelection = prompt('Choose Wisely', '');
*/

/*
console.log(playerSelection);
 Create a function that takes playerSelection and computerSelection and plays a round of the game */

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = (`You Win, ${playerSelection} beat ${computerSelection}!!!`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = (`You Win, ${playerSelection} beats ${computerSelection}!!!`);
    } else if (playerSelection == computerSelection) {
        result = (`You Tied!!! ${computerSelection} equals ${playerSelection}`);
    } else if (playerSelection != 'rock' || 'paper' || 'scissors') {
        result = (`You loose ${playerSelection} is not a valid guess`);
    } else {result = (`You loose, ${computerSelection} beats ${playerSelection}!!!`);
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
        console.log(computerSelection);
        let playerSelection = prompt('Choose Wisely', '').toLowerCase();
        console.log(playerSelection);
        let roundEndMessage = playRound(playerSelection, computerSelection);
        console.log(roundEndMessage);  
    }

}

let playGame = game(computerPlay,playRound);