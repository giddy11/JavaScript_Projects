let startBtn = document.getElementById("startBtn")
let newBtn = document.getElementById("newBtn")
let msgEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let greetingEl = document.getElementById("greeting-el")
let playerEl = document.getElementById("player-el")



// let cards = [4, 10]
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sentence = ["Hello", "my", "name", "is", "Per"]
let count = 0

let player = {
    name: "Gideon",
    chips: 145
}


playerEl.textContent = player.name + ": $" + player.chips

for(let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " "
    console.log(sentence[i]);
}

function startGame() {
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    isAlive = true
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}
 
function renderGame(){
    count = 0
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    msgEl.textContent = message
}

function newGame(){
    if (isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

    count++
    console.log(count);
    
}

function getRandomCard(){
    let randomNumber = Math.random()
    let flooredNumber = Math.floor(randomNumber * 13) // from 0 to 5.9999.....
    if (flooredNumber == 1)
        return 11
    else if (flooredNumber > 10)
        return 10
    else
        return flooredNumber + 1
}

startBtn.addEventListener("click", startGame)
newBtn.addEventListener("click", newGame)

// getSubBtn.addEventListener("click", Sub)
// getDivBtn.addEventListener("click", Div)
// getMulBtn.addEventListener("click", Mul)
