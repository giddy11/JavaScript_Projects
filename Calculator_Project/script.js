const getNum1 = document.getElementById("num1-el").textContent = 8
const getNum2 = document.getElementById("num2-el").textContent = 13
const getAddBtn = document.getElementById("addBtn")
const getSubBtn = document.getElementById("subBtn")
const getDivBtn = document.getElementById("divBtn")
const getMulBtn = document.getElementById("mulBtn")
const getResEl = document.getElementById("res-el")
let res = 0

function Add(){
    res = getNum1 + getNum2
    getResEl.innerText = "Sum: " + res
}

function Sub(){
    res = getNum1 - getNum2
    getResEl.innerText = "Sub: " + res
}

function Div(){
    res = getNum1 / getNum2
    getResEl.innerText = "Div: " + res
}

function Mul(){
    res = getNum1 * getNum2
    getResEl.innerText = "Mul: " + res
}



getAddBtn.addEventListener("click", Add)
getSubBtn.addEventListener("click", Sub)
getDivBtn.addEventListener("click", Div)
getMulBtn.addEventListener("click", Mul)
