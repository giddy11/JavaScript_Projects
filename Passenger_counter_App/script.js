let count = 0
const getEl = document.getElementById("count-el")
const getPrev = document.getElementById("prev-etr")
const btnEl = document.getElementById("incrementBtn")
const saveEl = document.getElementById("save-btn")

getEl.innerText = count


function increment(){
    count++
    getEl.innerText = count
}

function save(){
    let countStr = count + " - "
    getPrev.textContent += countStr
    // getPrev.innerText += countStr
    getEl.textContent = 0
    count = 0
}

btnEl.addEventListener("click", increment)
saveEl.addEventListener("click", save)

console.log("Let's count people on the subway!")


/*


 */