export interface FrenchHornFingerings {
  '': string[]
  '1': string[]
  '2': string[]
  '3': string[]
  '12': string[]
  '23': string[]
  '13': string[]
  '123': string[]
  T: string[]
  T1: string[]
  T2: string[]
  T3: string[]
  T12: string[]
  T23: string[]
  T13: string[]
  T123: string[]
}

export interface Fingerings {
  frenchHorn: FrenchHornFingerings
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
