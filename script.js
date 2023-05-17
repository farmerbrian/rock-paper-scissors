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
const container = document.querySelector('#container');
const heading = document.createElement('h2');
heading.classList.add('heading');

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    playerSelection = (button.id);
    computerSelection = computerPlay();
    // Display score and announce winner in the HTML
    playGame = playRound(playerSelection,computerSelection);
        if ((playerScore <= 4) && (computerScore <= 4)) {
        heading.textContent = `You guessed "${playerSelection}" and the Computer guessed "${computerSelection}".
          The score is: You (${playerScore}) -  Computer (${computerScore})!`;
    container.appendChild(heading); 
    } else if ((playerScore > 5) || (computerScore > 5)) {
        playerScore = 0;
        computerScore = 0;
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








