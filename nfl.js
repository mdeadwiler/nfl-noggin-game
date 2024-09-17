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


const resetButton = document.querySelector('.reset')
const attemptMessage = document.querySelector('#attempts')
//const attemptCount = document.querySelector("#attemptCount")
const cards = document.querySelectorAll('.memory-card')
let playerFlippedCard = false
let firstCard
let secondCard
let lockBoard = false
let attemptCount

reset()
shuffle()
function flipCard () {
  if (lockBoard) {
    return
  }
  if (this === firstCard) {
    return
  }
  this.classList.add('flip')

  if (!playerFlippedCard) {
    //first card click
    playerFlippedCard = true
    firstCard = this
  } else {
    //second card click
    playerFlippedCard = false
    secondCard = this
    checkMatch()
  }
}

function checkMatch () {
  if (firstCard.dataset.players === secondCard.dataset.players) {
    //checkWin();
  } else {
    unflippedPlayerCard()
    attemptCount++
    //attemptCount.textContent = attemptCount;
    if (attemptCount >= 5) {
      /*attemptMessage.textContent = "Loser";
      attemptMessage.fontSize = "45px";
      scoreToWin.textContent = "0";*/
      cards.forEach(card => {
        card.removeEventListener('click', flipCard)
      })
    
    }
  }
}
//DOM
function disableCard () {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  reset()
}

function unflippedPlayerCard () {
  lockBoard = true
  setTimeout(function () {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    reset()
  }, 800)
}

function reset () {
  playerFlippedCard = false
  lockBoard = false
  firstCard = null || 'undefined'
  secondCard = null || 'undefined'
}

function shuffle () {
  cards.forEach(card => {
    let shuffledDeck = Math.floor(Math.random() * 12)
    card.style.order = shuffledDeck
  })
  //shuffle();
} // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random && https://www.youtube.com/watch?v=NGtx3EBlpNE

function resetGame () {
//DOM
  window.location.reload() // source: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial
}
cards.forEach(cards => cards.addEventListener('click', flipCard))
//DOM
resetButton.addEventListener('click', resetGame)

shuffle()

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
