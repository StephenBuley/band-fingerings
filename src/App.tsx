import "./App.css"
import { useState, useEffect } from "react"
import { Button } from "./components/Button"
import { TFrenchHornFingerings } from "./types"
import { fingerings } from "./fingerings"
import { musicNotes } from "./musicNotes"

function App() {
  const [note, setNote] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    askQuestion()
  }, [])

  function askQuestion() {
    // this sets a random note on refresh
    const letters = [
      // some commented out to deal with fingerings, haven't decided whether to include them or not
      "A",
      // "A#",
      "Ab",
      "B",
      // "B#",
      "Bb",
      "C",
      // "C#",
      // "Cb",
      "D",
      // "D#",
      "Db",
      "E",
      // "E#",
      "Eb",
      "F",
      // "F#",
      // "Fb",
      "G",
      // "G#",
      "Gb",
    ]
    const numbers = [4] // right now just 4, until fingerings update
    const randomNum1 = Math.floor(Math.random() * letters.length)
    const randomNum2 = Math.floor(Math.random() * numbers.length)
    setNote(`${letters[randomNum1]}${numbers[randomNum2]}`)
    setDisplayText("")
    setSelected([])
  }

  function selectFinger(text: string) {
    setSelected((prevState) => {
      if (prevState.includes(text)) {
        // this means the button was already in selected, so we need to "unselect" it
        return unselectButton(prevState, text)
      } else {
        // the button was not selected, so we need to select it
        return selectButton(prevState, text)
      }
    })
  }

  function checkAnswer() {
    if (
      fingerings.frenchHorn[
        selected.join("") as keyof TFrenchHornFingerings
      ].includes(note)
    ) {
      setDisplayText("Correct!")
    } else {
      setDisplayText("Try Again!")
    }
  }

  function unselectButton(prevState: string[], text: string) {
    return [...prevState.filter((button) => button !== text)]
  }

  function selectButton(prevState: string[], text: string) {
    return [...prevState, text].sort(
      (a, b) => (a.charCodeAt(0) > 65 ? -1 : parseInt(a) - parseInt(b)) // this sorting algorithm puts T first, then numbers in ascending order
    )
  }

  return (
    <div>
      <h1 className="title">French Horn Fingerings</h1>
      <p className="music-notation">
        {musicNotes.trebleClefWithStaff +
          musicNotes[note as keyof typeof musicNotes] +
          musicNotes.staffEnd}
      </p>
      {/* <img src={`/${note}.png`} alt={note} /> */}
      <div className="buttons">
        <Button
          text="T"
          type="input"
          tabIndex={1}
          handleFingeringClick={selectFinger}
          selected={selected}
        />
        <Button
          text="1"
          type="input"
          tabIndex={2}
          handleFingeringClick={selectFinger}
          selected={selected}
        />
        <Button
          text="2"
          type="input"
          tabIndex={3}
          handleFingeringClick={selectFinger}
          selected={selected}
        />
        <Button
          text="3"
          type="input"
          tabIndex={4}
          handleFingeringClick={selectFinger}
          selected={selected}
        />
      </div>
      <Button
        text="Check Answer"
        type="action"
        tabIndex={5}
        handleActionButtonClick={checkAnswer}
        selected={selected}
      />
      <Button
        text="Reset"
        type="action"
        tabIndex={6}
        handleActionButtonClick={askQuestion}
        selected={selected}
      />
      <div className="display">{displayText}</div>
    </div>
  )
}

export default App
