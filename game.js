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

// Function to play game for 1 round and determine winner of the round:
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

// Function to play the game for 5 rounds and keep a tally of the score. After 5 rounds, announces a winner.
function game(round) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        round = playRound();
        console.log(round);

        if (round == 'Draw!') {
            playerScore;
            computerScore;
        } else if (round == 'Paper beats rock. You Lose!' || round == 'Scissors beat paper. You Lose!' || round == 'Rock beats scissors. You Lose!') {
            computerScore++;
        } else if (round == 'Rock beats scissors. You Win!' || round == 'Paper beats rock. You Win!' || round == 'Scissors beat paper. You Win!') {
            playerScore++;
        }
        console.log("Player: " + playerScore + " - Computer: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log('PLAYER WINS BEST OF 5');
    } else {
        console.log('COMPUTER WINS BEST OF 5');
    }
}




