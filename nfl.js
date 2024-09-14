const cards = document.querySelectorAll('.memory-card');

const flipCard = () => {
    console.log('click to flip');
    console.log(this); // allows action from cards eventListener flipCard function
}

  cards.forEach(cards => cards.addEventListener('click', flipCard)); 
    
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