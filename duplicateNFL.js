// Select DOM elements
const resetButton = document.querySelector('.reset');
const attemptMessage = document.querySelector('#attempts');
const cards = document.querySelectorAll('.memory-card');

// Game state variables
let playerFlippedCard = false;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let attemptCount = 0;

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
    // Cards match
    disableCards();
  } else {
    // Cards don't match
    unflipCards();
    attemptCount++;
    attemptMessage.textContent = `Attempts: ${attemptCount}`;
    if (attemptCount >= 5) {
      attemptMessage.textContent = "Game Over!";
      attemptMessage.style.fontSize = "45px";
      cards.forEach(card => card.removeEventListener('click', flipCard));
    }
  }
}

// Disable cards after a match
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  reset();
}

// Flip cards back if they do not match
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  }, 800);
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

// Reset the game by reloading the page
function resetGame() {
  window.location.reload();
}

// Event listeners
cards.forEach(card => card.addEventListener('click', flipCard));
resetButton.addEventListener('click', resetGame);
