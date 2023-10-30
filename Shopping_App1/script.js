const getPurcEl = document.getElementById("purcBtn")
const getErr = document.getElementById("error")



function showError(){
    getErr.textContent = "Something went wrong. Please try again"
}


getPurcEl.addEventListener("click", showError)