

const cards = document.querySelectorAll('.memory-card');

const flipCard = () => {
    this.classList.toggle('click to flip');
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
