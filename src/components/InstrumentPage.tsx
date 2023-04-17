import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InstrumentPageProps } from '../types'
import Button from './Button'
import musicNotes from '../musicNotes'
import { fhorn } from '../fingerings'

export default function InstrumentPage<
  T extends { [index: string]: string[] },
>({ name, clef, valves, fingeringSet }: InstrumentPageProps<T>) {
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
      'As',
      'Ab',
      'B',
      // "Bs",
      'Bb',
      'C',
      'Cs',
      // "Cb",
      'D',
      'Ds',
      'Db',
      'E',
      // "Es",
      'Eb',
      'F',
      'Fs',
      // "Fb",
      'G',
      'Gs',
      'Gb',
    ]
    const numbers = clef === 'treble' ? [4] : [3] // only 4 for horn and 3 for euph right now
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

  function checkAnswer<U extends { [index: string]: string[] }>(fingering: U) {
    if (fingering[selected.join('') as keyof U].includes(note)) {
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
          musicNotes[`${clef}${note}` as keyof typeof musicNotes] +
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
            handleFingeringClick={selectFinger}
            selected={selected}
            fingering={fhorn}
          />
        ))}
      </div>
      <Button
        text="Check Answer"
        type="action"
        handleActionButtonClick={checkAnswer}
        selected={selected}
        fingering={fingeringSet}
      />
      <Button
        text="Reset"
        type="action"
        handleActionButtonClick={askQuestion}
        selected={selected}
        fingering={fingeringSet}
      />
      <div className="display">{displayText}</div>
      <Link to="/" tabIndex={0}>
        Back to Instrument Selection
      </Link>
    </div>
  )
}
