// Game Start
// Player clicks to start the game
// Shuffle cards before the game begins
//Lock the board so no further selections can be made until cards reset

/*----------------------------Card action---------------------------------------------------*/

//Ensure the first card is visible (front) and the second card is hidden (back)
// Player clicks to flip two cards (toggle) and check for a match
// If the cards match, keep both cards visible (call matchCard())
// If the cards do not match, flip the cards back (toggle back)

/*------------------- Logic behind NFL Noggin------*/
// Track mismatches:
// If there are mismatches, the memory game exercise will not be complete
// There is no time limit to complete the game. You will have all chances to complete the game. This wil test your patience and memory

/*-----------------Reset the Game--------------------------*/
//Player clicks a reset button to shuffle cards and start a new game. But before that, you will be notified that you finished the game. Have fun!

/*-------------------------My DOM elements---------------*/

const resetButton = document.querySelector('.reset')
const cards = document.querySelectorAll('.memory-card')
//const winnerMessage = document.getElementById('winner-message') This was my 'pop up' message to be notified the player won(but we are not allowed!)
const instructions = document.querySelectorAll('.instructions')

/*------------- Game variables--------------------------------*/
let playerFlippedCard = false
let firstCard = null
let secondCard = null
let lockBoard = false
let matchedPairs = 0
const totalPairs = cards.length / 2

console.log(instructions)

// Initialize game
reset()
shuffle()

// Function to handle card flip
function flipCard () {
  // This prevents interaction if the board is locked or the same card is clicked twice
  if (lockBoard || this === firstCard) return

  this.classList.add('flip')

  if (!playerFlippedCard) {
    // First card click
    playerFlippedCard = true
    firstCard = this
  } else {
    // Second card click
    playerFlippedCard = false
    secondCard = this
    checkMatch()
  }
}

// Function to check if two flipped cards match
function checkMatch () {
  if (firstCard.dataset.players === secondCard.dataset.players) {
    disableCards()
    checkWinner()
  } else {
    unflipCards()
  }
}

// This disable cards after a match
function disableCards () {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  matchedPairs++
  reset()
}

// This flips the cards back if they do not match
function unflipCards () {
  lockBoard = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    reset()
  }, 400)
}

// Reset the game state
function reset () {
  playerFlippedCard = false
  lockBoard = false
  firstCard = null
  secondCard = null
}

// Shuffle the cards
function shuffle () {
  cards.forEach(card => {
    const shuffledDeck = Math.floor(Math.random() * cards.length)
    card.style.order = shuffledDeck
  })
}

function checkWinner () {
  if (matchedPairs === totalPairs) {
    instructions[0].innerHTML = '<h1>CONGRATULATIONS, YOU WIN!</h1>'
    instructions[1].innerText = ''
    instructions[2].innerText = ''
    instructions[3].innerText = ''
    instructions[4].innerText = ''
  }
}

// Reset the game by reloading the page
function resetGame () {
  window.location.reload()
}

// Event listeners
cards.forEach(card => card.addEventListener('click', flipCard))
resetButton.addEventListener('click', resetGame)

//source: https://www.youtube.com/watch?v=ZniVgo8U7ek
//source: https://www.improvememory.org/brain-games/memory-games/happy-halloween/
//https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/

/* 
To determine the Big O notation for this code, we need to analyze the time complexity of its operations. Let's break it down by functions:

Initialization and setup: O(n)

Querying DOM elements: O(n)
Initial reset() and shuffle(): O(n)


flipCard(): O(1)

Constant time operations


checkMatch(): O(1)

Constant time operations


disableCards(): O(1)

Constant time operations


unflipCards(): O(1)

Constant time operations (setTimeout doesn't affect complexity)


reset(): O(1)

Constant time operations


shuffle(): O(n)

Iterates through all cards once


checkWinner(): O(1)

Constant time operations


resetGame(): O(1)

Constant time operation (page reload)



The dominant factor in this code is the shuffle() function, which has a time complexity of O(n), where n is the number of cards. All other functions operate in constant time O(1) or are called a constant number of times.
Therefore, the overall time complexity of this code in Big O notation is O(n), where n is the number of cards.
It's worth noting that the space complexity is also O(n) due to the storage of card elements and other game state variables.
*/






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
    setTimeOut()
    winner()
    reset()
    //window.location
}*/

/*console.log(firstCard.dataset.players);
    console.log(secondCard.dataset.players);*/
