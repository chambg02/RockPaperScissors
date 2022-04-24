

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
    computerSelection = computerPlay();
     playerSelection = playerPlay();
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);




}







