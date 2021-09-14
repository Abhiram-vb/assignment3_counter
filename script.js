let incBtnEl = document.getElementById('incBtn')
let decBtnEl = document.getElementById("decBtn")
let resetBtnEl = document.getElementById("resetBtn")
let counterEl = document.getElementById("counter")

incBtnEl.onclick = function() {
    let counterVal = parseInt(counterEl.textContent)
    counterEl.textContent = counterVal + 1
}
decBtnEl.onclick = function() {
    let counterVal = parseInt(counterEl.textContent)
    if (counterVal > 0) {
        counterEl.textContent = counterVal - 1
    } 
}
resetBtnEl.onclick = function() {
    counterEl.textContent = 0
}
