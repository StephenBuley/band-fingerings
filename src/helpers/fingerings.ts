import {
  EuphoniumFingering,
  FrenchHornFingering,
  ThreeValveFingering,
} from '../types'

export const fhorn: FrenchHornFingering = {
  '': ['C4', 'E4', 'G4', 'G3', 'C3'], // this is for open fingerings
  1: ['D4', 'F4', 'Bb3', 'As3', 'F3'],
  2: ['Eb4', 'Gb4', 'Fs4', 'Ds4', 'B3', 'Fs3', 'Gb3'],
  3: ['A3', 'E3'],
  12: ['Db4', 'Cs4', 'A3', 'E3'],
  23: ['Ab3', 'Gs3', 'Eb3', 'Ds3'],
  13: ['D3'],
  123: ['Db3', 'Cs3'],
  T: ['C5', 'F5', 'G5', 'A5', 'C6', 'F3'],
  T1: ['Bb4', 'As4', 'Ds5', 'Eb5', 'Bb5', 'As5', 'Eb3', 'Ds3'],
  T2: ['B4', 'E5', 'Fs5', 'Gb5', 'Ab5', 'B5', 'E3'],
  T3: ['A4', 'D5', 'A5', 'D3'],
  T12: ['A4', 'D5', 'A5', 'D3'],
  T23: ['Ab4', 'Gs4', 'Cs5', 'Db5', 'Ab5', 'Gs5', 'Db3', 'Cs3'],
  T13: ['C3'],
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

export const trumpet: ThreeValveFingering = {
  '': ['C4', 'G4', 'C5', 'E5', 'G5'],
  1: ['Bb3', 'F4', 'Bb4', 'D5', 'F5', 'As3', 'As4'],
  2: ['B3', 'Fs4', 'B4', 'Ds5', 'Fs5', 'Gb4', 'Eb5', 'Gb5'],
  3: ['E4', 'A4', 'E5'],
  12: ['E4', 'A4', 'E5', 'Cs5', 'Db5'],
  23: ['Eb4', 'Ab4', 'Ds4', 'Gs4'],
  13: ['D4'],
  123: ['Cs4', 'Db4'],
}
