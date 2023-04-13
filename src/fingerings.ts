/* eslint-disable quote-props */
import { Fingerings } from './types'

const fingerings: Fingerings = {
  frenchHorn: {
    '': ['C4', 'E4', 'G4'], // this is for open fingerings
    '1': ['D4', 'F4'],
    '2': ['Eb4', 'Gb4'],
    '3': [],
    '12': ['Db4'],
    '23': [],
    '13': [],
    '123': [],
    T: [],
    T1: ['Bb4'],
    T2: ['B4'],
    T3: ['A4'],
    T12: ['A4'],
    T23: ['Ab4'],
    T13: [],
    T123: [],
  },
  // euphonium: {
  //   '': [], // this is for open fingerings
  //   '1': [],
  //   '2': [],
  //   '3': [],
  //   '12': [],
  //   '23': [],
  //   '13': [],
  //   '123': [],
  // },
}

export default fingerings
