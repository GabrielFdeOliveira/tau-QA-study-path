let password = "tomorrow";
let userGuess = "";

// while (userGuess !== password) {
//   userGuess = prompt("Enter the password");
// }

// alert("You guessed the password!");
let factorial = 1;
let number = 5;
let originalNumber = number;
do {
  factorial *= number;
  number--;
} while (number > 0);

console.log(`The factorial of ${originalNumber} is ${factorial}`);
