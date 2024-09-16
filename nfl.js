// make sure second card is hidden from the player
// click to start game
//shuffle cards before the start of the game
//make sure the bored is locked so that the cards flip back before the next click selection
//make sure the first card is on top and the back card is hidden behind before click & flip
//click to flip two cards to see if there is a match between the selection(toggle)
// if there is not a match then flip cards back (toggle)(if else)
//if there is a match then keep second card visible matchCard() removeCard()
//if timer runs out the player loses and ends game
//if all selected cards match before timer is ended then player wins game
// click to reset for new game

const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");
  
  if(!hasFlippedCard) {
    //first card click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second card click
    hasFlippedCard = false;
    secondCard = this;
    
    // cards match?
    if (firstCard.dataset.players === secondCard.dataset.players) {
        // match!
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    } else {
        // not a match!
    setTimeout(() => {
        firstCard.classicList.remove("flip");
        secondCard.classicList.remove("flip");
    }, 500);
    }
  }
}

cards.forEach(cards => cards.addEventListener("click", flipCard)); 




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