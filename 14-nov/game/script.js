let userPoints = 0;
let compPoints = 0;

const options = ["Stone", "Paper", "Scissor"];

function spinDice() {
  
  const userChoice = options[Math.floor(Math.random() * 3)];
  document.getElementById("user-choice").innerText = "Your Choice: " + userChoice;


  const compChoice = options[Math.floor(Math.random() * 3)];
  document.getElementById("comp-choice").innerText = "Computer Choice: " + compChoice;

  let result = "";

  
  if (userChoice === compChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "Stone" && compChoice === "Scissor") ||
    (userChoice === "Paper" && compChoice === "Stone") ||
    (userChoice === "Scissor" && compChoice === "Paper")
  ) {
    result = "You Win!";
    userPoints++;
  } else {
    result = "Computer Wins!";
    compPoints++;
  }


  document.getElementById("user-score").innerText = "Points: " + userPoints;
  document.getElementById("comp-score").innerText = "Points: " + compPoints;

  document.getElementById("result").innerText = "Result: " + result;
}

function resetGame() {
  userPoints = 0;
  compPoints = 0;

  document.getElementById("user-choice").innerText = "Your Choice: -";
  document.getElementById("comp-choice").innerText = "Computer Choice: -";
  document.getElementById("user-score").innerText = "Points: 0";
  document.getElementById("comp-score").innerText = "Points: 0";
  document.getElementById("result").innerText = "Result: -";
}
