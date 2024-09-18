// Game Start
// Player clicks to start the game
// Shuffle cards before the game begins
//Lock the board so no further selections can be made until cards reset

// Card action
//Ensure the first card is visible (front) and the second card is hidden (back)
// Player clicks to flip two cards (toggle) and check for a match
// If the cards match, keep both cards visible (call matchCard())
// If the cards do not match, flip the cards back (toggle back)

// Logic behind NFL Noggin
// Track mismatches:
// If there are more than three mismatches, the game is over (loop to check up to 4 attempts)
// Track time:
// If the timer runs out, the player loses, and the game ends
// If all cards are matched before the timer ends, the player wins

// Reset the Game
//Player clicks a reset button to shuffle cards and start a new game

// Select DOM elements
const resetButton = document.querySelector('.reset');
const cards = document.querySelectorAll('.memory-card');
const winnerMessage = document.getElementById("winner-message");
const instructions = document.querySelectorAll('.instructions')
// Game state variables
let playerFlippedCard = false;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
const totalPairs = cards.length / 2;

console.log(instructions)

// Initialize game
reset();
shuffle();

// Function to handle card flip
function flipCard() {
  // Prevent interaction if the board is locked or the same card is clicked twice
  if (lockBoard || this === firstCard) return;

  this.classList.add('flip');

  if (!playerFlippedCard) {
    // First card click
    playerFlippedCard = true;
    firstCard = this;
  } else {
    // Second card click
    playerFlippedCard = false;
    secondCard = this;
    checkMatch();
  }
}

// Function to check if two flipped cards match
function checkMatch() {
  if (firstCard.dataset.players === secondCard.dataset.players) {
    disableCards();
    checkWinner();
  } else {
    unflipCards();
  }
}

// Disable cards after a match
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  matchedPairs++;
  reset();
}

// Flip cards back if they do not match
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  }, 400);
}



// Reset the game state
function reset() {
  playerFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

// Shuffle the cards
function shuffle() {
  cards.forEach(card => {
    const shuffledDeck = Math.floor(Math.random() * cards.length);
    card.style.order = shuffledDeck;
  });
}


function checkWinner() {
  if (matchedPairs === totalPairs) {

    instructions[0].innerHTML = '<h1>CONGRATULATIONS, YOU WIN!</h1>';
    instructions[1].innerText = '';
    instructions[2].innerText = '';
    instructions[3].innerText = '';
    instructions[4].innerText = '';
  }
}

// Reset the game by reloading the page
function resetGame() {
  window.location.reload();
}

// Event listeners
cards.forEach(card => card.addEventListener('click', flipCard));
resetButton.addEventListener('click', resetGame);


//source: https://www.youtube.com/watch?v=ZniVgo8U7ek
//source: https://www.improvememory.org/brain-games/memory-games/happy-halloween/

//use a ternary method
/*const flipCard = () => {
    this.classList.toggle('click to flip');
    
}
const handleClick = () => {
    flipCard()
    start()
    shuffle()
    lockBoard()
    firstCard()
    secondCard()
    roundAttempt -- if there were three rounds
    matchCard()
    removeCard()
    timerOut()
    endGame()
    reset()
}*/

/*console.log(firstCard.dataset.players);
    console.log(secondCard.dataset.players);*/
