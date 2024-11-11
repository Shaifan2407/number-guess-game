const form = document.querySelector("form");
let randomNumber = Math.trunc(Math.random() * 100) + 1;
console.log(randomNumber);
let guessRemaining = 10;

form.querySelector("#subt").addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = Number(document.querySelector("#guessField").value);
  const previousGuess = document.querySelector(".guesses");
  const remaningGuess = document.querySelector(".lastResult");
  const result = document.querySelector(`.lowOrHi`);

  if (isNaN(inputValue)) {
    alert(`please give a valid number`);
    document.querySelector("#guessField").value = "";
  } else if (inputValue === 0) {
    alert(`please Enter a number between 1 to 100`);
  } else {
    if (inputValue === randomNumber) {
      result.textContent = `Congratulation 🎉 !! \nYou guessed right number.`;
      document.querySelector("#guessField").value = "";
      previousGuess.textContent = "";
      remaningGuess.textContent = 10;
      guessRemaining = 10;
      randomNumber = Math.trunc(Math.random() * 100) + 1;
      console.log(randomNumber);
    } else {
      if (guessRemaining === 0) {
        result.textContent = `Gane Over 🥵, You can play again`;
        document.querySelector("#guessField").value = "";
        previousGuess.textContent = "";
        remaningGuess.textContent = 10;
        guessRemaining = 10;
      } else {
        result.textContent = `you guessed wrong Number🤕!! Try Again.`;
        document.querySelector("#guessField").value = "";
        guessRemaining--;
        previousGuess.textContent = inputValue;
        remaningGuess.textContent = guessRemaining;
      }
    }
  }
});
