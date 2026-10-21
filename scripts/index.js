// ==========================================
// EXERCISE 1: Guess the random number
// ==========================================
function guessNumberGame() {
  let targetNumber = Math.floor(Math.random() * 10) + 1;
  let guess = 0; 
  
  while (guess !== targetNumber) {
    guess = parseFloat(prompt("Guess a number between 1 and 10:"));
    
    if (guess > targetNumber) {
      console.log("Too high! Try again.");
    } else if (guess < targetNumber) {
      console.log("Too low! Try again.");
    } else if (guess === targetNumber) {
      console.log("Congrats, you win.");
    }
  }
}

guessNumberGame();

// ==========================================
// EXERCISE 2: Create an array of random numbers
// ==========================================
function generateRandomArray(length) {
  let randomNumbers = [];
  
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNum);
  }
  
  return randomNumbers;
}

console.log("Random Array:", generateRandomArray(5));

// ==========================================
// EXERCISE 3: Calculate the sum of even numbers in the array
// ==========================================
function sumEvenNumbers(arr) {
  let sum = 0; 
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]; 
    }
  }
  
  return sum;
}

console.log("Sum of Even Numbers:", sumEvenNumbers([2, 4, 5, 8]));
