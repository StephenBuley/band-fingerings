import { Clef } from './types'

function getNote(clef: Clef) {
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

export default getNote
