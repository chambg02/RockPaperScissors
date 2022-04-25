

// Function to make the computer pick Rock, Paper or Scissors randomly:
function computerPlay() {
    randomNumber = Math.floor(Math.random()*3+1);
    let computerChoice = '';
    if (randomNumber == 1) {
        computerChoice = "rock";
    } else if (randomNumber == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// Function to prompt user input and convert it for compatibility:
function playerPlay() {
    let playerInput ='';
    let playerChoice = '';
    
    playerInput = prompt("Choose Rock, Paper or Scissors!")
    playerChoice = playerInput.toLowerCase();

    return playerChoice;
}

// Function to prompt user input, make computer generate pick then determine a winner:
function playRound(playerSelection, computerSelection) {
    let result = '';
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

    // Results for Player selecting Rock
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        result = 'Draw!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'Paper beats rock. You Lose!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'Rock beats scissors. You Win!'
    }
    
    // Results for Player selecting Paper
    if (playerSelection == 'paper' && computerSelection == 'paper') {
        result = 'Draw!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'Scissors beat paper. You Lose!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'Paper beats rock. You Win!'
    }
    
    // Results for Player selecting Scissors
    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        result = 'Draw!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'Rock beats scissors. You Lose!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'Scissors beat paper. You Win!'
    }

    return result;
}







