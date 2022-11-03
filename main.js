// Begin with a function called getComputerChoice that randomly returns rock, paper or scissors.

const getComputerChoice = function () {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Create a function that plays a single round of Rock, Paper, Scissors. The function must accept two parameters: playerSelection and computerSelection

const playRound = function (playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock")
  ) {
    return `Computer chooses ${computerSelection}. ${computerSelection} beats ${playerSelection.toLowerCase()}. You lose!`;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    return `Computer chooses ${computerSelection}. ${playerSelection.toLowerCase()} beats ${computerSelection}. You win!`;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "scissors")
  ) {
    return `Computer chooses ${computerSelection}. It's a draw!`;
  } else {
    return `Not a valid option. Computer wins by default!`;
  }
};

// Create a function called game that plays 5 rounds and displays the results.

const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      `Rock, Paper or Scissors? Type your selection. (${i + 1} of 5)`
    );
    console.log(playRound(playerChoice, getComputerChoice()));
  }
};

// call the game funciton

game();
