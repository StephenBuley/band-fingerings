import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InstrumentPageProps } from '../types'
import Button from './Button'
import { musicNotes } from '../helpers/musicNotes'
import {
  getNote,
  getStaffBeginning,
  selectButton,
  unselectButton,
} from '../helpers/functions'
// import HornFingerValve from './HornFingerValve'
// import HornThumbValve from './HornThumbValve'

export default function InstrumentPage<T extends Record<string, string[]>>({
  name,
  clef,
  valveSet,
  fingeringSet,
  availableNotes,
}: InstrumentPageProps<T>) {
  const [note, setNote] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    askQuestion()
  }, [])

  function askQuestion() {
    setNote(getNote(availableNotes))
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
    <div className="container">
      <h1 className="title">{name} Fingerings</h1>
      <p className="music-notation">
        {musicNotes[getStaffBeginning(clef) as keyof typeof musicNotes] +
          musicNotes[`${clef}${note}` as keyof typeof musicNotes] +
          musicNotes.staffEnd}
      </p>
      <div className="valves">
        {valveSet.map((valve) => ({
          ...valve,
          props: {
            ...valve.props,
            handleFingeringClick: selectFinger,
            selected,
          },
        }))}
      </div>
      <Button
        text="Check Answer"
        handleActionButtonClick={checkAnswer}
        fingering={fingeringSet}
      />
      <Button
        text="Next Question!"
        handleActionButtonClick={askQuestion}
        fingering={fingeringSet}
      />
      <Link className="link--navigate" to="/" tabIndex={0}>
        Back to Instrument Selection
      </Link>
      <div className="display">{displayText}</div>
    </div>
  )
}
