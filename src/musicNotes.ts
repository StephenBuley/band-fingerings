const musicNotes = {
  trebleClefWithStaff: '-=', // U+E01AU+E050U+E01A-=U+E01A
  B4: '', // U+E1D5=U+E01A
  A4: '=', // U+EB98U+E1D5=U+E01A
  C5: '=', // U+EB90U+E1D5=U+E01A
  G4: '=', // U+EB99U+E1D5=U+E01A
  F4: '=', // U+EB9AU+E1D5=U+E01A
  E4: '=', // U+EB9BU+E1D5=U+E01A
  D4: '=', // U+EB9CU+E1D5=U+E01A
  C4: '=', // U+EB9DU+E022U+EB9DU+E1D5=U+E01A
  Bb4: '', // U+E260 U+E1D5U+E01A
  Ab4: '--', // U+E260 U+E1D5U+E01A
  Db4: '--', // U+E260 U+E1D5U+E01A
  Eb4: '--', // U+E260 U+E1D5U+E01A
  Gb4: '--', // U+E260 U+E1D5U+E01A
  staffEnd: '--=', // -U+E01A-=U+E030
}

// TODO: come up with a better way to do this, because this hurts my head
export default musicNotes
