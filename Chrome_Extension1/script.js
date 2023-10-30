const saveBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
// let msgEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let greetingEl = document.getElementById("greeting-el")
// let playerEl = document.getElementById("player-el")

let myLeads = []
let message = ""

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads);
})

// for (let i = 0; i < myLeads.length; i++){
//     console.log(myLeads[i]);
// }


// getSubBtn.addEventListener("click", Sub)
// getDivBtn.addEventListener("click", Div)
// getMulBtn.addEventListener("click", Mul)
