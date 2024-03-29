// Game Functions 
// Player must guess a number between a min and a max 
// Player gets a certain amount of guesses 
// Notify player of remaining guesses
// Notify the player of the correct answer if they lose 
// Let player to choose again 

// Game values 
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('#game'), 
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;



// Listen for guess 
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  //Check if won
  if (guess === winningNum){
    //Game over- won
    
    //Disable Input 
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Set message
    setMessage(`${winningNum} is right! YOU WIN`, 'green');

  }else {
    //Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      //Game over - lost 

      //Disable Input 
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'red';

    //Set message
    setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
    } else {
      //Game continues - answer wrong
      guessInput.style.borderColor = 'red';
      //Change border color 

      setMessage(`${guess} is incorrect, ${guessesLeft} guesses left`)
    }
  }
});

//Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


