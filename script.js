let incBtnEl = document.getElementById('incBtn')
let decBtnEl = document.getElementById("decBtn")
let resetBtnEl = document.getElementById("resetBtn")
let counterEl = document.getElementById("counter")
let paraEl = document.getElementById("para")

incBtnEl.onclick = function() {
    let counterVal = parseInt(counterEl.textContent)
    counterEl.textContent = counterVal + 1
    paraEl.textContent = ""
}
decBtnEl.onclick = function() {
    let counterVal = parseInt(counterEl.textContent)
    if (counterVal > 0) {
        counterEl.textContent = counterVal - 1
        paraEl.textContent = ""
    } else {
        paraEl.textContent = "No negative counter"
    }
}
resetBtnEl.onclick = function() {
    counterEl.textContent = 0
    paraEl.textContent = ""
}
