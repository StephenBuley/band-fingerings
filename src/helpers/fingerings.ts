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
  '': ['F3', 'Bb3', 'As3', 'Bb2', 'As2', 'D4'], // this is for open fingerings
  1: ['Eb3', 'Ab3', 'C4', 'Ds3', 'Gs3', 'Gs2', 'Ab2', 'Ds4', 'Eb4'],
  2: ['E3', 'A3', 'A2', 'Cs4', 'Db4', 'E4'],
  3: ['D3', 'G3', 'G2'],
  12: ['D3', 'G3', 'B3', 'G2', 'D4'],
  23: ['Db3', 'Gb3', 'Cs3', 'Fs3', 'Fs2', 'Gb2', 'Db4', 'Cs4'],
  13: ['F2', 'C3', 'C4'],
  123: ['E2', 'B2'],
  4: ['C3', 'F2'],
  14: [],
  24: ['E2', 'B2'],
  34: [],
  124: ['Ds2', 'Eb2'],
  134: ['Cs2', 'Db2'],
  234: ['D2'],
  1234: ['C2'],
}

export const trumpet: ThreeValveFingering = {
  '': ['C4', 'G4', 'C5', 'E5', 'G5', 'C6'],
  1: ['Bb3', 'F4', 'Bb4', 'D5', 'F5', 'As3', 'As4', 'Bb5', 'As5'],
  2: ['B3', 'Fs4', 'B4', 'Ds5', 'Fs5', 'Gb4', 'Eb5', 'Gb5', 'B5'],
  3: ['E4', 'A4', 'E5', 'A5', 'Cs5', 'Db5'],
  12: ['E4', 'A4', 'E5', 'A5', 'Cs5', 'Db5', 'Cs6'],
  23: ['Eb4', 'Ab4', 'Ds4', 'Gs4', 'Ab5', 'Gs5'],
  13: ['D4'],
  123: ['Cs4', 'Db4'],
}

export const tubaBbThreeValve: ThreeValveFingering = {
  '': ['F2', 'Bb2', 'As2', 'D3', 'F3', 'Bb3', 'As3'],
  1: ['Ds2', 'Eb2', 'Gs2', 'Ab2', 'C3', 'Ds3', 'Eb3', 'Gs3', 'Ab3'],
  2: ['E2', 'A2', 'Cs3', 'Db3', 'E3', 'A3'],
  3: ['D2', 'G2', 'B2', 'G3'],
  12: ['D2', 'G2', 'B2', 'G3'],
  23: ['Cs2', 'Db2', 'Fs2', 'Gb2', 'Fs3', 'Gb3'],
  13: ['C2'],
  123: [],
}
