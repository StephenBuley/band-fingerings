console.log("we made it, this is crazy")
let displayText;

const buttons = Array.from(document.querySelectorAll(".buttons > .btn"))
const submitButton = document.querySelector(".btn-submit")
const display = document.querySelector(".display")

buttons.forEach((button) => {
  button.addEventListener("click", e => toggleSelected(e.currentTarget as HTMLElement))
})

function toggleSelected(button: HTMLElement) {
  button.classList.toggle("selected")
}

submitButton?.addEventListener("click", checkAnswer)


function checkAnswer() {
  const selectedButtons = buttons.reduce((acc, button) => {
    if (button.classList.contains("selected")) {
      acc += button.textContent
    }
    return acc
  }, "")
  if (selectedButtons === "T12") {
    displayText = "Correct!"
  } else {
    displayText = "Try Again!"
  }
  display!.textContent = displayText
}

export {}