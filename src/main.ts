import { fingerings } from "./fingerings"
import { TFrenchHornFingerings } from "./types"
let displayText

const buttons = Array.from(document.querySelectorAll(".buttons > .btn"))
const submitButton = document.querySelector(".btn-submit")
const display = document.querySelector(".display")
const image = document.querySelector("img")!

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    toggleSelected(e.currentTarget as HTMLElement)
  )
})

function toggleSelected(button: HTMLElement) {
  button.classList.toggle("selected")
}

submitButton?.addEventListener("click", checkAnswer)

function checkAnswer() {
  const selectedButtons: keyof TFrenchHornFingerings = buttons.reduce(
    (acc, button) => {
      if (button.classList.contains("selected")) {
        acc += button.textContent
      }
      return acc
    },
    ""
  )
  if (
    fingerings.frenchHorn[selectedButtons].includes(image.getAttribute("alt")!)
  ) {
    displayText = "Correct!"
  } else {
    displayText = "Try Again!"
  }
  display!.textContent = displayText
}

export {}
