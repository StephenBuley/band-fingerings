interface ThreeValveFingerings {
  '': string[]
  1: string[]
  2: string[]
  3: string[]
  12: string[]
  23: string[]
  13: string[]
  123: string[]
}

export interface FrenchHornFingerings extends ThreeValveFingerings {
  T: string[]
  T1: string[]
  T2: string[]
  T3: string[]
  T12: string[]
  T23: string[]
  T13: string[]
  T123: string[]
}

export interface EuphoniumFingerings extends ThreeValveFingerings {
  4: string[]
  14: string[]
  24: string[]
  34: string[]
  124: string[]
  134: string[]
  234: string[]
  1234: string[]
}

export interface Fingerings {
  frenchHorn: FrenchHornFingerings
  euphonium: EuphoniumFingerings
}

export interface ButtonProps {
  text: string
  tabIndex: number
  type: 'input' | 'action'
  handleFingeringClick?: (text: string) => void
  handleActionButtonClick?: () => void
  selected: string[]
}

export interface InstrumentPageProps {
  name: string
  clef: 'treble' | 'bass'
  valves: string[]
}
