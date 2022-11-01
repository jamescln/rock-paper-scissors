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
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `Computer chooses ${computerSelection}. ${computerSelection} beats ${playerSelection}. You lose!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `Computer chooses ${computerSelection}. ${playerSelection} beats ${computerSelection}. You win!`;
  } else {
    return `Not a valid option. Computer wins by default!`;
  }
};
