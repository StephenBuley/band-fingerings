import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TInstrumentPageProps, TFrenchHornFingerings } from '../types'
import { Button } from './Button'
import fingerings from '../fingerings'
import musicNotes from '../musicNotes'

export default function InstrumentPage({
  name,
  clef,
  valves,
}: TInstrumentPageProps) {
  const [note, setNote] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    askQuestion()
  }, [])

  function askQuestion() {
    // this sets a random note on refresh
    const letters = [
      // some commented out to deal with fingerings, haven't decided whether to include them or not
      'A',
      // "A#",
      'Ab',
      'B',
      // "B#",
      'Bb',
      'C',
      // "C#",
      // "Cb",
      'D',
      // "D#",
      'Db',
      'E',
      // "E#",
      'Eb',
      'F',
      // "F#",
      // "Fb",
      'G',
      // "G#",
      'Gb',
    ]
    const numbers = [4] // right now just 4, until fingerings update
    const randomNum1 = Math.floor(Math.random() * letters.length)
    const randomNum2 = Math.floor(Math.random() * numbers.length)
    setNote(`${letters[randomNum1]}${numbers[randomNum2]}`)
    setDisplayText('')
    setSelected([])
  }

  function selectFinger(text: string) {
    setSelected((prevState) => {
      if (prevState.includes(text)) {
        // this means the button was already in selected, so we need to "unselect" it
        return unselectButton(prevState, text)
      }
      // the button was not selected, so we need to select it
      return selectButton(prevState, text)
    })
  }

  function checkAnswer() {
    if (
      fingerings.frenchHorn[
        selected.join('') as keyof TFrenchHornFingerings
      ].includes(note)
    ) {
      setDisplayText('Correct!')
    } else {
      setDisplayText('Try Again!')
    }
  }

  function unselectButton(prevState: string[], text: string) {
    return [...prevState.filter((button) => button !== text)]
  }

  function selectButton(prevState: string[], text: string) {
    return [...prevState, text].sort(
      // this sorting algorithm puts T first, then numbers in ascending order
      (a, b) => (a.charCodeAt(0) > 65 ? -1 : parseInt(a, 10) - parseInt(b, 10)),
    )
  }
  function getStaffBeginning() {
    // transforms the clef into the correct name for musicNotes.ts
    return `${clef}ClefWithStaff`
  }
  return (
    <div>
      <h1 className="title">{name} Fingerings</h1>
      <p className="music-notation">
        {musicNotes[getStaffBeginning() as keyof typeof musicNotes] +
          musicNotes[note as keyof typeof musicNotes] +
          musicNotes.staffEnd}
      </p>
      <div className="buttons">
        {valves.map((valve) => (
          // for each valve, have to come up with something different for woodwinds)
          // create a button that has the text value from the valve array
          // with a type of input, tab index of index + 1 for 1 through length of array
          // and correct handleFingeringClick and selected prop values
          <Button
            key={valve}
            text={valve}
            type="input"
            tabIndex={0}
            handleFingeringClick={selectFinger}
            selected={selected}
          />
        ))}
      </div>

      <Button
        text="Check Answer"
        type="action"
        tabIndex={0}
        handleActionButtonClick={checkAnswer}
        selected={selected}
      />
      <Button
        text="Reset"
        type="action"
        tabIndex={0}
        handleActionButtonClick={askQuestion}
        selected={selected}
      />
      <div className="display">{displayText}</div>
      <Link to="/" tabIndex={0}>
        Back to Instrument Selection
      </Link>
    </div>
  )
}
