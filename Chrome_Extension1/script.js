const saveBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let container = document.getElementById("container")
const buyBtn = document.getElementById("buy-btn")

let myLeads = []
let listItems = ""
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabs = [
//     {url: "https://www.facebook.com"}
// ]

// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"));
})

delBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let count = arr.length
    let baseString = `The ${count} ${desc} are `
    const lastIndex = count - 1
    for (let i = 0; i < count; i++){
        if (i === lastIndex)
            baseString += arr[i]
        else
            baseString += arr[i] + ","
    }
    return baseString
}

const hel = generateSentence("largest countries", ["China", "India", "USA"])
console.log(hel);