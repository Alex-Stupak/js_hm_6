const buttonDec = document.querySelector("[data-action=decrement]")
const buttonInc = document.querySelector("[data-action=increment]")
buttonDec.addEventListener('click', deButtonClick)
buttonInc.addEventListener('click', inButtonClick)
function deButtonClick() {
    counterValue.textContent--
}
function inButtonClick() {
    counterValue.textContent++
}
const counterValue = document.querySelector('span')
console.log(counterValue.textContent)