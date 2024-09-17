// make sure second card is hidden from the player
// click to start game
//shuffle cards before the start of the game
//make sure the bored is locked so that the cards flip back before the next click selection
//make sure the first card is on top and the back card is hidden behind before click & flip
//click to flip two cards to see if there is a match between the selection(toggle)
// if there is not a match then flip cards back (toggle)(if else)
//if there is a match then keep second card visible matchCard() removeCard()
// if you miss match more than three times then the game is over (loop it => 4)
//if timer runs out the player loses and ends game
//if all selected cards match before timer is ended then player wins game
// click to reset for new game

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
