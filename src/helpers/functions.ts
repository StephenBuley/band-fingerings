import { BaseSyntheticEvent, KeyboardEvent, ChangeEvent } from 'react'
import { Clef } from '../types'

export function getNote(notes: string[]) {
  // this sets a random note on refresh
  return notes[Math.floor(Math.random() * notes.length)] || ''
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

export function getStartingSelected(name: string) {
  return name === 'Trombone' ? ['1'] : []
}

export function getAvailableNotes(
  lowestNote: string,
  highestNote: string,
): string[] {
  const letters = [
    // some commented out to deal with fingerings, haven't decided whether to include them or not
    // "Bs",
    'C',
    'Cs',
    // "Cb",
    'Db',
    'D',
    'Ds',
    'Eb',
    'E',
    // "Es",
    // "Fb",
    'F',
    'Fs',
    'Gb',
    'G',
    'Gs',
    'Ab',
    'A',
    'As',
    'Bb',
    'B',
  ]
  const lowestLetter = lowestNote.slice(0, -1)
  const lowestNum = parseInt(lowestNote.slice(-1), 10)
  const highestLetter = highestNote.slice(0, -1)
  const highestNum = parseInt(highestNote.slice(-1), 10)
  const lowestLetterIndex = letters.findIndex(
    (letter) => letter === lowestLetter,
  )
  const highestLetterIndex = letters.findIndex(
    (letter) => letter === highestLetter,
  )

  const availableNotes: string[] = []
  for (let i = lowestNum; i <= highestNum; i += 1) {
    if (i === lowestNum) {
      // only add the letters starting with the lowest letter
      for (let j = lowestLetterIndex; j < letters.length; j += 1) {
        availableNotes.push(`${letters[j]}${i}`)
      }
    } else if (i === highestNum) {
      // only add the letters until the highest letter
      for (let j = 0; j < highestLetterIndex + 1; j += 1) {
        availableNotes.push(`${letters[j]}${i}`)
      }
    } else {
      // add all the letters in the array
      for (let j = 0; j < letters.length; j += 1) {
        availableNotes.push(`${letters[j]}${i}`)
      }
    }
  }
  return availableNotes
}
