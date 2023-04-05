import "./App.css"
import { useState, useEffect } from "react"
import { Button } from "./components/Button"
import { TButtonProps } from "./types"

function App() {
  const [note, setNote] = useState("")
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    // this sets a random note on refresh
    const letters = [
      "A",
      "A#",
      "Ab",
      "B",
      "B#",
      "Bb",
      "C",
      "C#",
      "Cb",
      "D",
      "D#",
      "Db",
      "E",
      "E#",
      "Eb",
      "F",
      "F#",
      "Fb",
      "G",
      "G#",
      "Gb",
    ]
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    const randomNum1 = Math.floor(Math.random() * letters.length)
    const randomNum2 = Math.floor(Math.random() * numbers.length)
    // setNote(letters[randomNum1] + numbers[randomNum2]) when I add more pngs. For now, only A4
    setNote("A4")
  })

  function handleClick(type: TButtonProps["type"], text: string) {
    type === "submit"
      ? console.log("submit")
      : setSelected((prevState) => {
          if (prevState.includes(text)) {
            // this means the button was already in selected, so we need to "unselect" it
            return [...prevState.filter((button) => button !== text)]
          } else {
            // the button was not selected, so we need to select it
            return [...prevState, text].sort(
              (a, b) => (a.charCodeAt(0) > 65 ? -1 : parseInt(a) - parseInt(b)) // this sorting algorithm puts T first, then numbers in ascending order
            )
          }
        })
  }

  return (
    <div>
      <h1 className="title">French Horn Fingerings</h1>
      <img src={`./src/assets/${note}.png`} alt={note} />
      <div className="buttons">
        <Button
          text="T"
          type="input"
          tabIndex={1}
          handleClick={handleClick}
          selected={selected}
        />
        <Button
          text="1"
          type="input"
          tabIndex={2}
          handleClick={handleClick}
          selected={selected}
        />
        <Button
          text="2"
          type="input"
          tabIndex={3}
          handleClick={handleClick}
          selected={selected}
        />
        <Button
          text="3"
          type="input"
          tabIndex={4}
          handleClick={handleClick}
          selected={selected}
        />
      </div>
      <Button
        text="Check Answer"
        type="submit"
        tabIndex={5}
        handleClick={handleClick}
        selected={selected}
      />
      <div className="display">Selected: {selected}</div>
    </div>
  )
}

export default App
