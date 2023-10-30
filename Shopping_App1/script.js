const getPurcEl = document.getElementById("purcBtn")
const getErr = document.getElementById("error")



function showError(){
    getErr.textContent = "Something went wrong. Please try again"
}


getPurcEl.addEventListener("click", showError)

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// fix this in the above: China and Pakistan

largeCountries.pop()
largeCountries.shift()
largeCountries.push("Pakistan")
largeCountries.unshift("China")

console.log(largeCountries);
