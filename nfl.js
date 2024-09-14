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

const cards = document.querySelectorAll('.memory-card');

const flipCard = () => {
    this.classList.toggle('click to flip');
    this.
}

    
 const handleClick = (event) => {
    flipCard(event)
    //start()
    //shuffle()
    //lockBoard
    //firstCard()
    //secondCard()
    //roundAttempt -- if there were three rounds
    // flipCard()
    // matchCard
    //removeCard
    //timerOut
    //endGame
    //reset

    
 }
 cards.forEach(cards => cards.addEventListener('click', flipCard)); 
