import { EuphoniumFingering, FrenchHornFingering } from '../types'

export const fhorn: FrenchHornFingering = {
  '': ['C4', 'E4', 'G4'], // this is for open fingerings
  1: ['D4', 'F4'],
  2: ['Eb4', 'Gb4', 'Fs4', 'Ds4'],
  3: [],
  12: ['Db4', 'Cs4'],
  23: [],
  13: [],
  123: [],
  T: [],
  T1: ['Bb4', 'As4'],
  T2: ['B4'],
  T3: ['A4'],
  T12: ['A4'],
  T23: ['Ab4', 'Gs4'],
  T13: [],
  T123: [],
}
export const euphonium: EuphoniumFingering = {
  '': ['F3', 'Bb3', 'As3'], // this is for open fingerings
  1: ['Eb3', 'Ab3', 'C4', 'Ds3', 'Gs3'],
  2: ['E3', 'A3'],
  3: ['D3', 'G3'],
  12: ['D3', 'G3', 'B3'],
  23: ['Db3', 'Gb3', 'Cs3', 'Fs3'],
  13: ['C3', 'C4'],
  123: [],
  4: ['C3'],
  14: [],
  24: [],
  34: [],
  124: [],
  134: [],
  234: [],
  1234: [],
}
