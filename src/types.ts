export type TFrenchHornFingerings = {
  "": string[]
  "1": string[]
  "2": string[]
  "3": string[]
  "12": string[]
  "23": string[]
  "123": string[]
  T: string[]
  T1: string[]
  T2: string[]
  T3: string[]
  T12: string[]
  T23: string[]
  T123: string[]
}

export type TFingerings = {
  frenchHorn: TFrenchHornFingerings
}

export type TButtonProps = {
  text: string
  tabIndex: number
  type: "input" | "submit"
}
