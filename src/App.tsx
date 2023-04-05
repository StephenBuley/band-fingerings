import "./App.css"
import { useState, useEffect } from "react"
import { Button } from "./components/Button"

function App() {
  const [notePicture, setNotePicture] = useState("")

  useEffect(() => {
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
    // setNotePicture(letters[randomNum1] + numbers[randomNum2]) when I add more pngs. For now, only A4
    setNotePicture("A4")
  })

  return (
    <div>
      <h1 className="title">French Horn Fingerings</h1>
      <img src={`./src/assets/${notePicture}.png`} alt={notePicture} />
      <div className="buttons">
        <Button text="T" type="input" tabIndex={1} />
        <Button text="1" type="input" tabIndex={2} />
        <Button text="2" type="input" tabIndex={3} />
        <Button text="3" type="input" tabIndex={4} />
      </div>
      <button className="btn btn-submit">Check Answer</button>
      <div className="display"></div>
    </div>
  )
}

export default App
