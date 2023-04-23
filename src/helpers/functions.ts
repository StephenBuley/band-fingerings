import { BaseSyntheticEvent, KeyboardEvent } from 'react'
import { Clef } from '../types'

export function getNote(clef: Clef) {
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
  return `${letters[randomNum1]}${numbers[randomNum2]}`
}

export function getStaffBeginning(clef: Clef) {
  // transforms the clef into the correct name for musicNotes.ts
  return `${clef}ClefWithStaff`
}

export function unselectButton(prevState: string[], text: string) {
  return [...prevState.filter((button) => button !== text)]
}

export function selectButton(prevState: string[], text: string) {
  return [...prevState, text].sort(
    // this sorting algorithm puts T first, then numbers in ascending order
    (a, b) => (a.charCodeAt(0) > 65 ? -1 : parseInt(a, 10) - parseInt(b, 10)),
  )
}

export function isKeyEvent(e: BaseSyntheticEvent): e is KeyboardEvent {
  return (e as KeyboardEvent).key !== undefined
}
