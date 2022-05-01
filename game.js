let playerScore = 0;
let computerScore = 0;

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

// Function to play game first to 5 based on button click:

    function playRound(playerSelection, computerSelection) {
        let result = '';
        computerSelection = computerPlay();

        // Results for Player selecting Rock
        if (playerSelection == 'rock' && computerSelection == 'rock') {
            result = 'Draw!';
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            result = 'Paper beats rock. Computer scores!';
            computerScore++;
        }
        else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            result = 'Rock beats scissors. Player scores!'
            playerScore++;
        }
        
        // Results for Player selecting Paper
        if (playerSelection == 'paper' && computerSelection == 'paper') {
            result = 'Draw!';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            result = 'Scissors beat paper. Computer scores!';
            computerScore++;
        }
        else if (playerSelection == 'paper' && computerSelection == 'rock') {
            result = 'Paper beats rock. Player scores!'
            playerScore++;
        }
        
        // Results for Player selecting Scissors
        if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            result = 'Draw!';
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            result = 'Rock beats scissors. Computer scores!';
            computerScore++;
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            result = 'Scissors beat paper. Player scores!'
            playerScore++;
        }

        if (computerScore < 5 && playerScore < 5) { 
            document.getElementById('scoreCounter').innerText='Player: ' + `${playerScore}` + ' - Computer: ' + `${computerScore}`;
            document.getElementById('resultDiv').innerText=`${result}`;
        } else if (computerScore === 5) {
            document.getElementById('resultDiv').innerText="";
            document.getElementById('scoreCounter').innerText='BETTER LUCK NEXT TIME';
            document.getElementById('winnerAnnounce').innerText="COMPUTER WINS!";
        } else if (playerScore === 5) {
            document.getElementById('resultDiv').innerText="";
            document.getElementById('scoreCounter').innerText='CONGRATULATIONS';
            document.getElementById('winnerAnnounce').innerText="PLAYER WINS!";
        }
    }

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('winnerAnnounce').innerText="";
    document.getElementById('scoreCounter').innerText='Player: ' + `${playerScore}` + ' - Computer: ' + `${computerScore}`;
}


const rockClick = document.querySelector('#rock');
rockClick.addEventListener('click', () => {
    playRound('rock',computerPlay());
})

const paperClick = document.querySelector('#paper');
paperClick.addEventListener('click', () => {
    playRound('paper',computerPlay());
})

const scissorsClick = document.querySelector('#scissors');
scissorsClick.addEventListener('click', () => {
    playRound('scissors',computerPlay());
})


const resetClick = document.querySelector('#reset');
resetClick.addEventListener('click', () => {
    resetGame()
})


