const startBtn = document.getElementById("startBtn")
const newBtn = document.getElementById("newBtn")
const msgEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const greetingEl = document.getElementById("greeting-el")


// let cards = [4, 10]
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sentence = ["Hello", "my", "name", "is", "Per"] 

for(let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " "
    console.log(sentence[i]);
}

function startGame() {
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    let isAlive = false
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}
 
function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        msgEl.textContent = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        msgEl.textContent = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        msgEl.textContent = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)
}

function newGame(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
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
