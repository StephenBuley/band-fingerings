import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InstrumentPageProps } from '../types'
import Button from './Button'
import musicNotes from '../helpers/musicNotes'
import { fhorn } from '../helpers/fingerings'
import {
  getNote,
  getStaffBeginning,
  selectButton,
  unselectButton,
} from '../helpers/functions'

export default function InstrumentPage<T extends Record<string, string[]>>({
  name,
  clef,
  valves,
  fingeringSet,
}: InstrumentPageProps<T>) {
  const [note, setNote] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    askQuestion()
  }, [])

  function askQuestion() {
    setNote(getNote(clef))
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

  function checkAnswer(fingering: T) {
    if (fingering[selected.join('') as keyof T].includes(note)) {
      setDisplayText('Correct!')
    } else {
      setDisplayText('Try Again!')
    }
  }

  return (
    <div>
      <h1 className="title">{name} Fingerings</h1>
      <p className="music-notation">
        {musicNotes[getStaffBeginning(clef) as keyof typeof musicNotes] +
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
        text="Next Question!"
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
