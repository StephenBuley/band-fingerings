const musicNoteComponents = {
  b: '',
  q: '',
  staff: '',
  u1: '',
  u2: '',
  u3: '',
  u4: '',
  u5: '',
  u6: '',
  d1: '',
  '-': '-',
  '=': '=',
  d2: '',
  d3: '',
  d4: '',
  d5: '',
  d6: '',
  leger: '',
  _: ' ',
  treble: '',
  bass: '',
}

const musicNotes = {
  trebleClefWithStaff: encode('staff treble staff - = staff'), // '-=', // U+E01AU+E050U+E01A-=U+E01A
  bassClefWithStaff: encode('staff bass staff - = staff'), // '-=', // U+E01AU+E062U+E01A-=U+E01A
  staffEnd: '--=', // -U+E01A-=U+E030
  trebleB4: encode('q staff'), // U+E1D5=U+E01A
  trebleA4: encode('d1 q = staff'), // '=', // U+EB98U+E1D5=U+E01A
  trebleC5: encode('u1 q = staff'), // '=', // U+EB90U+E1D5=U+E01A
  trebleG4: encode('d2 q = staff'), // '=', // U+EB99U+E1D5=U+E01A
  trebleF4: encode('d3 q = staff'), // '=', // U+EB9AU+E1D5=U+E01A
  trebleE4: encode('d4 q = staff'), // '=', // U+EB9BU+E1D5=U+E01A
  trebleD4: encode('d5 q = staff'), // '=', // U+EB9CU+E1D5=U+E01A
  trebleC4: encode('d6 leger d6 q = staff'), // '=', // U+EB9DU+E022U+EB9DU+E1D5=U+E01A
  trebleBb4: encode('b q staff'), // '', // U+E260 U+E1D5U+E01A
  trebleAb4: encode('d1 b - d1 q - staff'), // '--', // U+E260 U+E1D5U+E01A
  trebleDb4: encode('d5 b - d5 q - staff'), // '--', // U+E260 U+E1D5U+E01A
  trebleEb4: encode('d4 b - d4 q - staff'), // '--', // U+E260 U+E1D5U+E01A
  trebleGb4: encode('d2 b - d2 q - staff'), // '--', // U+E260 U+E1D5U+E01A
  bassC3: encode('d1 q = staff'),
  bassD3: encode('q staff'),
  bassE3: encode('u1 q = staff'),
  bassF3: encode('u2 q = staff'),
  bassG3: encode('u3 q = staff'), // etc. this will go on
}

function encode(string: string) {
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

export default musicNotes
