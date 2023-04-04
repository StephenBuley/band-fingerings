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

export const fingerings: TFingerings = {
  frenchHorn: {
    "": ["C4", "E4", "G4"], // this is for open fingerings
    "1": ["D4", "F4"],
    "2": ["Eb4", "Gb4"],
    "3": [],
    "12": ["Db4"],
    "23": [],
    "123": [],
    T: [],
    T1: ["Bb4"],
    T2: ["B4"],
    T3: ["A4"],
    T12: ["A4"],
    T23: ["Ab4"],
    T123: [],
  },
}
