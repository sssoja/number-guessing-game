let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let num = Math.floor(Math.random() * 9);
  return num;
};

const getDifference = (secretTarget, guess) => {
  return Math.abs(secretTarget - guess);
};

const validateGuess = guess => {
  if (guess < 0 || guess > 9) {
    alert("Oops, number out of range!");
  }
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  validateGuess(humanGuess);
  return (
    getDifference(secretTarget, humanGuess) <=
    getDifference(secretTarget, computerGuess)
  );
};

console.log(compareGuesses(1, 5, 5)); // should return false
console.log(compareGuesses(1, 1, 1)); // should return true
console.log(compareGuesses(1, 2, 7)); // should return false
console.log(compareGuesses(1, 1, 1)); // should return true
console.log(compareGuesses(9, 1, 5)); // should return true

const updateScore = winner => {
  let humanScore = 0;
  let computerScore = 0;
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  return;
};

const advanceRound = () => {
  let currentRoundNumber = 1;
  currentRoundNumber++;
};
