// Start the game by randomly selecting the computers choice and storing in variable called computerSelection
const choicesArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let choice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return choice;
}

// Create global variables to store the score
let playerScore = 0;
let computerScore = 0;
let playerSelecion;
let playGame;
let computerSelection = computerPlay();
console.log(computerSelection);

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    playerSelection = (button.id);
    playGame = playRound(playerSelection,computerSelection);
    console.log(playGame);
    if ((playerScore || computerScore) <= 4) {
        heading.textContent = `The score is ${playerScore} to ${computerScore}!`;
    container.appendChild(heading); 
    } else if (playerScore > computerScore) { 
        heading.textContent = `You WIN!! ${playerScore} to ${computerScore}`;
        container.appendChild(heading);
    } else {
        heading.textContent = `You LOSE!! ${playerScore} to ${computerScore}`;
        container.appendChild(heading);  
    }
   
      });
    });


// Create a function that takes playerSelection and computerSelection and plays a round of the game and increments the score

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


const container = document.querySelector('#container');

const heading = document.createElement('h2');
heading.classList.add('heading');


// Time to display the score   
    // if (playerScore > computerScore) {
    //     alert(`Congratulations, You WON!!!  The score was ${playerScore} - ${computerScore}`);
    // } else if (playerScore < computerScore) {
    //     alert(`Sorry, You LOST!!! The score was ${playerScore} - ${computerScore}`);
    // } else {
    //     alert(`Sorry, you TIED. The score was ${playerScore} - ${computerScore}`);
    // }
        




