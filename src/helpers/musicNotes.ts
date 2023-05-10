export const musicNoteComponents = {
  b: '', // U+E260
  s: '', // U+E262
  q: '', // U+E1D5
  qd: '', // U+E1D6
  staff: '', // U+E01A
  u1: '', // U+EB90
  u2: '', // U+EB91
  u3: '', // U+EB92
  u4: '', // U+EB93
  u5: '', // U+EB94
  u6: '', // U+EB95
  u7: '', // U+EB96
  u8: '', // U+EB97
  d1: '', // U+EB98
  d2: '', // U+EB99
  d3: '', // U+EB9A
  d4: '', // U+EB9B
  d5: '', // U+EB9C
  d6: '', // U+EB9D
  d7: '', // U+EB9E
  d8: '', // U+EB9F
  '-': '-', // -
  '=': '=', // =
  leger: '', // U+E022
  _: ' ', // space
  treble: '', // U+E050
  bass: '', // U+E062
  barline: '', // U+E030
}

export function encode(string: string) {
  const directions = string.split(' ')
  return directions.reduce((acc, value) => {
    if (Object.hasOwn(musicNoteComponents, value)) {
      return (
        acc + musicNoteComponents[value as keyof typeof musicNoteComponents]
      )
    }
    return acc
  }, '')
}

export const musicNotes = {
  trebleClefWithStaff: encode('staff treble staff - = staff'),
  bassClefWithStaff: encode('staff bass staff - = staff'),
  staffEnd: encode('- staff - = barline'),
  trebleAb3: encode('d8 b - _ d6 leger d8 leger d8 q - staff'),
  trebleA3: encode('d6 leger d8 leger d8 q = staff'),
  trebleAs3: encode('d8 s - _ d6 leger d8 leger d8 q - staff'),
  trebleBb3: encode('d7 b - _ d6 leger d7 q - staff'),
  trebleB3: encode('d6 leger d7 q = staff'),
  trebleC4: encode('d6 leger d6 q = staff'),
  trebleCs4: encode('d6 s - _ d6 leger d6 q - staff'),
  trebleDb4: encode('d5 b - _ d5 q - staff'),
  trebleD4: encode('d5 q = staff'),
  trebleDs4: encode('d5 s - _ d5 q - staff'),
  trebleEb4: encode('d4 b - _ d4 q - staff'),
  trebleE4: encode('d4 q = staff'),
  trebleF4: encode('d3 q = staff'),
  trebleFs4: encode('d3 s - _ d3 q - staff'),
  trebleGb4: encode('d2 b - _ d2 q - staff'),
  trebleG4: encode('d2 q = staff'),
  trebleGs4: encode('d2 s - _ d2 q - staff'),
  trebleAb4: encode('d1 b - _ d1 q - staff'),
  trebleA4: encode('d1 q = staff'),
  trebleAs4: encode('d1 s - _ d1 q - staff'),
  trebleBb4: encode('b _ qd staff'),
  trebleB4: encode('qd staff'),
  trebleC5: encode('u1 qd = staff'),
  trebleCs5: encode('u1 s - _ u1 qd - staff'),
  trebleDb5: encode('u2 b - _ u2 qd - staff'),
  trebleD5: encode('u2 qd = staff'),
  trebleDs5: encode('u2 s - _ u2 qd - staff'),
  trebleEb5: encode('u3 b - _ u3 qd - staff'),
  trebleE5: encode('u3 qd = staff'),
  trebleF5: encode('u4 qd = staff'),
  trebleFs5: encode('u4 s - _ u4 qd - staff'),
  trebleGb5: encode('u5 b - _ u5 qd - staff'),
  trebleG5: encode('u5 qd = staff'),
  trebleGs5: encode('u5 s - _ u5 qd - staff'),
  trebleAb5: encode('u6 b - _ u6 leger u6 qd - staff'),
  trebleA5: encode('u6 leger u6 qd = staff'),
  trebleAs5: encode('u6 s - _ u6 leger u6 qd - staff'),
  trebleBb5: encode('u7 b - _ u6 leger u7 qd - staff'),
  trebleB5: encode('u6 leger u7 qd = staff'),
  trebleC6: encode('u6 leger u8 leger u8 qd = staff'),
  trebleCs6: encode('u8 s - _ u6 leger u8 leger u8 qd - staff'),
  bassC2: encode('d6 leger d8 leger d8 q = staff'),
  bassCs2: encode('d8 s - _ d6 leger d8 leger d8 q - staff'),
  bassDb2: encode('d7 b - _ d6 leger d7 q - staff'),
  bassD2: encode('d6 leger d7 q = staff'),
  bassDs2: encode('d7 s - _ d6 leger d7 q - staff'),
  bassEb2: encode('d6 b - _ d6 leger d6 q - staff'),
  bassE2: encode('d6 leger d6 q = staff'),
  bassF2: encode('d5 q = staff'),
  bassFs2: encode('d5 s - _ d5 q - staff'),
  bassGb2: encode('d4 b - _ d4 q - staff'),
  bassG2: encode('d4 q = staff'),
  bassGs2: encode('d4 s - _ d4 q - staff'),
  bassAb2: encode('d3 b - _ d3 q - staff'),
  bassA2: encode('d3 q = staff'),
  bassAs2: encode('d3 s - _ d3 q - staff'),
  bassBb2: encode('d2 b - _ d2 q - staff'),
  bassB2: encode('d2 q = staff'),
  bassC3: encode('d1 q = staff'),
  bassCs3: encode('d1 s - _ d1 q - staff'),
  bassDb3: encode('b _ qd staff'),
  bassD3: encode('qd staff'),
  bassDs3: encode('s _ qd staff'),
  bassEb3: encode('u1 b - _ u1 qd - staff'),
  bassE3: encode('u1 qd = staff'),
  bassF3: encode('u2 qd = staff'),
  bassFs3: encode('u2 s - _ u2 qd - staff'),
  bassGb3: encode('u3 b - _ u3 qd - staff'),
  bassG3: encode('u3 qd = staff'),
  bassGs3: encode('u3 s - _ u3 qd - staff'),
  bassAb3: encode('u4 b - _ u4 qd - staff'),
  bassA3: encode('u4 qd = staff'),
  bassAs3: encode('u4 s - _ u4 qd - staff'),
  bassBb3: encode('u5 b - _ u5 qd - staff'),
  bassB3: encode('u5 qd = staff'),
  bassC4: encode('u6 leger u6 qd = staff'),
  bassCs4: encode('u6 s - _ u6 leger u6 qd - staff'),
  bassDb4: encode('u7 b - _ u6 leger u7 qd - staff'),
  bassD4: encode('u6 leger u7 qd = staff'),
  bassDs4: encode('u7 s - _ u6 leger u7 qd - staff'),
  bassEb4: encode('u8 b - _ u6 leger u8 leger u8 qd - staff'),
  bassE4: encode('u6 leger u8 leger u8 qd = staff'),
}
