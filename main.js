// Global

const playerChoiceButton = document.querySelector(".playerChoice");
const resultText = document.querySelector(".result");
let playerChoice;

// define playerScore and computerScore values

let playerScore = 0;
let computerScore = 0;

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
    computerScore++;
    return `Computer chooses ${computerSelection}. ${computerSelection} beats ${playerSelection.toLowerCase()}. You lose!`;
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    playerScore++;
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

// removed the logic that plays exactly 5 rounds
const game = function (e) {
  playerChoice = e.textContent;
  console.log(playRound(playerChoice, getComputerChoice()));
  console.log(
    `Current Score: Player ${playerScore} - Computer ${computerScore}`
  );
  if (i === 4) {
    console.log(
      `Final Score: Player ${playerScore} - Computer ${computerScore}`
    );
    if (computerScore > playerScore) {
      console.log(`Computer Wins!`);
    } else if (computerScore < playerScore) {
      console.log(`You Win!`);
    } else {
      console.log(`It's a Draw!`);
    }
  }
  // }
};

// Button events to call game function

playerChoiceButton.onClick(game());
