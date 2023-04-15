type ThreeValveFingering = {
  '': string[]
  1: string[]
  2: string[]
  3: string[]
  12: string[]
  23: string[]
  13: string[]
  123: string[]
}

export type FrenchHornFingering = ThreeValveFingering & {
  T: string[]
  T1: string[]
  T2: string[]
  T3: string[]
  T12: string[]
  T23: string[]
  T13: string[]
  T123: string[]
}

export type EuphoniumFingering = ThreeValveFingering & {
  4: string[]
  14: string[]
  24: string[]
  34: string[]
  124: string[]
  134: string[]
  234: string[]
  1234: string[]
}

export interface ButtonProps<T> {
  text: string
  type: 'input' | 'action'
  handleFingeringClick?: (text: string) => void
  handleActionButtonClick?: (fingering: T) => void | (() => void)
  selected: string[]
  fingering: T
}

export interface InstrumentPageProps<T> {
  name: string
  clef: 'treble' | 'bass'
  valves: string[]
  fingeringSet: T
}
