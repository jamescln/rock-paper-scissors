// Global

const playerChoiceButtons = document.querySelectorAll(".playerChoice");
const resultText = document.querySelector(".result");
const finalResultText = document.querySelector(".final-result");
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameResult;

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
const game = function () {
  resultText.textContent = playRound(playerChoice, getComputerChoice());
  finalResultText.textContent = `Current Score: Player ${playerScore} - Computer ${computerScore}`;
  round++;
  if (round === 5) {
    if (computerScore > playerScore) {
      gameResult = "Computer Wins!";
    } else if (computerScore < playerScore) {
      gameResult = "You Win!";
    } else {
      gameResult = "It's a Draw!";
    }
    finalResultText.textContent = `Final Score: Player ${playerScore} - Computer ${computerScore}. ${gameResult}`;
  }
  // }
};

// Button events
playerChoiceButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playerChoice = e.target.textContent;
    if (round < 5) {
      game();
    }
  });
});
