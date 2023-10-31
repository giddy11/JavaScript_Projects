// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const contain = document.getElementById("container")

let listItems = ""

const imgs = [
    "images/hip1.jpg",
    "images/hip25.jpg",
    "images/hip3.jpg"
]

function render(leads){
    listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `<img alt="Employee in the company" class="team-img"  src='${leads[i]}'>`
    }
    contain.innerHTML = listItems
}

render(imgs)