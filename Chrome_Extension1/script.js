const saveBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let container = document.getElementById("container")
const buyBtn = document.getElementById("buy-btn")

// let cardsEl = document.getElementById("cards-el")
// let greetingEl = document.getElementById("greeting-el")
// let playerEl = document.getElementById("player-el")

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // console.log(myLeads);
})

function buy(){
    container.innerHTML += "<p>Thank you<p/>"
    console.log(9);
}


// for (let i = 0; i < myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

for (let i = 0; i < myLeads.length; i++){
    //create element
    //set text element
    //append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}

container.innerHTML = '<button onClick="buy()">Buy</button>'



// getSubBtn.addEventListener("click", Sub)
// getDivBtn.addEventListener("click", Div)
// getMulBtn.addEventListener("click", Mul)
