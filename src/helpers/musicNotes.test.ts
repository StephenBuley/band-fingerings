import { assertType, describe, expect, it } from 'vitest'
import { encode, musicNoteComponents } from './musicNotes'

describe('encode function', () => {
  it('returns a string', () => {
    assertType<string>(encode('staff treble'))
  })
  it('returns the correct music note component', () => {
    expect(encode('staff')).toEqual(musicNoteComponents.staff)
  })
  it('returns an empty string if the encoding is wrong', () => {
    expect(encode('staf')).toEqual('')
  })
  it('correctly parses a string with multiple spaces', () => {
    expect(encode('staff treble staff')).toEqual(
      musicNoteComponents.staff +
        musicNoteComponents.treble +
        musicNoteComponents.staff,
    )
  })
})
