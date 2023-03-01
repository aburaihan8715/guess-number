// selecting elements
const btnAgain = document.querySelector(".btn-again");
const divSecretNumber = document.querySelector(".div-secret-number");
const inpGuess = document.querySelector(".inp-guess");
const btnCheck = document.querySelector(".btn-check");
const spanScore = document.querySelector(".span-score");
const spanHighscore = document.querySelector(".span-highscore");
const paraMessage = document.querySelector(".para-message");

// variables
let score = 20;
let highscore = 0;
let randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
divSecretNumber.textContent = randomSecretNumber;

// event listener for check btn
btnCheck.addEventListener("click", function () {
  const inpValue = Number(inpGuess.value);
  if (!inpValue) {
    paraMessage.textContent = "⚠ Enter number (1-20).";
    inpGuess.value = null;
  } else if (randomSecretNumber === inpValue) {
    divSecretNumber.textContent = randomSecretNumber;
    paraMessage.textContent = `Yea!!! your number is ${inpValue} and you won the game!`;
    if (score > highscore) {
      spanHighscore.textContent = score;
    }
    inpGuess.value = null;
  } else if (randomSecretNumber > inpValue) {
    paraMessage.textContent = `Your number ${inpValue} is too low.`;
    score--;
    spanScore.textContent = score;
    inpGuess.value = null;
  } else if (randomSecretNumber < inpValue) {
    paraMessage.textContent = `Your number ${inpValue} is too high.`;
    score--;
    spanScore.textContent = score;
    inpGuess.value = null;
  }
});

// event listener for again btn
btnAgain.addEventListener("click", function () {
  score = 20;
  randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
  divSecretNumber.textContent = randomSecretNumber;
  paraMessage.textContent = "Start guessing!";
  spanScore.textContent = score;
  divSecretNumber.textContent="?";
  inpGuess.value = null;
});
//===========end===========//
