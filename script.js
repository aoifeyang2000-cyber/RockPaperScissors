var playerScore = 0;
var computerScore = 0;

var playerChoiceText = document.getElementById("player-choice");
var computerChoiceText = document.getElementById("computer-choice");
var resultText = document.getElementById("result");
var playerScoreText = document.getElementById("player-score");
var computerScoreText = document.getElementById("computer-score");

function getComputerChoice() {
  var random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerChoice) {
  var computerChoice = getComputerChoice();

  playerChoiceText.textContent = "Your Choice: " + playerChoice;
  computerChoiceText.textContent = "Computer's Choice: " + computerChoice;

  var result = "";

  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  }
  else if (playerChoice === "Rock") {
    if (computerChoice === "Scissors") {
      result = "You win! Rock beats scissors.";
      playerScore++;
    } else {
      result = "You lose! Paper beats rock.";
      computerScore++;
    }
  }
  else if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      result = "You win! Paper beats rock.";
      playerScore++;
    } else {
      result = "You lose! Scissors beat paper.";
      computerScore++;
    }
  }
  else if (playerChoice === "Scissors") {
    if (computerChoice === "Paper") {
      result = "You win! Scissors beat paper.";
      playerScore++;
    } else {
      result = "You lose! Rock beats scissors.";
      computerScore++;
    }
  }

  resultText.textContent = "Result: " + result;
  playerScoreText.textContent = "Your Score: " + playerScore;
  computerScoreText.textContent = "Computer's Score: " + computerScore;
}
