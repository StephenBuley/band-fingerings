import { assertType, describe, expect, it } from 'vitest'
import {
  getAvailableNotes,
  getNote,
  getStaffBeginning,
  getStartingSelected,
  isKeyEvent,
  selectButton,
  unselectButton,
} from './functions'
import { BaseSyntheticEvent } from 'react'

describe('functions.ts', () => {
  describe('getNote function', () => {
    it('returns an empty string if given an empty array', () => {
      const note = getNote([])
      expect(note).toEqual('')
    })
    it('returns a string from the given array', () => {
      const array = ['a', 'b', 'c']
      const note = getNote(array)
      expect(note).toBeTypeOf('string')
      expect(array).toContain(note)
    })
    it('picks from the entire array', () => {
      const array = ['a', 'b', 'c']
      const found: string[] = []
      let allFound = false
      let count = 0
      while (!allFound) {
        const note = getNote(array)
        if (!found.includes(note)) {
          found.push(note)
        }
        count++
        if (found.length === array.length) allFound = true
        if (count === 1000) break
      }
      expect(allFound).toEqual(true)
    })
  })

  describe('getStaffBeginning function', () => {
    it('returns a string', () => {
      assertType<string>(getStaffBeginning('treble'))
      assertType<string>(getStaffBeginning('bass'))
    })
    it('returns "trebleClefWithStaff" when passed "treble"', () => {
      expect(getStaffBeginning('treble')).toEqual('trebleClefWithStaff')
    })
    it('returns "bassClefWithStaff" when passed "bass"', () => {
      expect(getStaffBeginning('bass')).toEqual('bassClefWithStaff')
    })
  })

  describe('unselectButton function', () => {
    it('returns a string array', () => {
      assertType<string[]>(unselectButton(['a', 'b'], 'a'))
    })
    it('returns an empty array when passed an empty array', () => {
      expect(unselectButton([], 'a')).toEqual([])
    })
    it('correctly filters the array', () => {
      expect(unselectButton(['T', '1', '3'], '3')).toEqual(['T', '1'])
      expect(unselectButton(['T'], 'T')).toEqual([])
    })
  })

  describe('selectButton', () => {
    it('returns a string array', () => {
      assertType<string[]>(selectButton(['T'], '1'))
    })
    it('returns an array with one more element', () => {
      expect(selectButton(['T', '1'], '2')).toHaveLength(3)
    })
    it('returns an array with the correct element added', () => {
      expect(selectButton(['T'], '1')).toEqual(['T', '1'])
    })
    it('returns a correctly sorted array', () => {
      expect(selectButton(['1', '2'], 'T')).toEqual(['T', '1', '2'])
    })
  })

  describe('getStarting selected function', () => {
    it('returns ["1"] when Trombone is the instrument', () => {
      expect(getStartingSelected('Trombone')).toEqual(['1'])
    })

    it('returns an empty array when any other instruments are selected', () => {
      expect(getStartingSelected('French Horn')).toEqual([])
    })

    it('returns an empty array when an empty string is passed', () => {
      expect(getStartingSelected('')).toEqual([])
    })
  })

  describe('getAvailableNotes function', () => {
    it('returns a string array', () => {
      assertType<string[]>(getAvailableNotes('A1', 'B1'))
    })
    it('returns correctly within the octave', () => {
      expect(getAvailableNotes('A1', 'B1')).toHaveLength(4)
      expect(getAvailableNotes('A1', 'B1')).toEqual(['A1', 'As1', 'Bb1', 'B1'])
    })
    it('returns correctly across the octave', () => {
      expect(getAvailableNotes('B1', 'Cs2')).toHaveLength(3)
      expect(getAvailableNotes('B1', 'Cs2')).toEqual(['B1', 'C2', 'Cs2'])
    })
    it('returns correctly across two octaves', () => {
      expect(getAvailableNotes('B1', 'Cs3')).toEqual([
        'B1',
        'C2',
        'Cs2',
        'Db2',
        'D2',
        'Ds2',
        'Eb2',
        'E2',
        'F2',
        'Fs2',
        'Gb2',
        'G2',
        'Gs2',
        'Ab2',
        'A2',
        'As2',
        'Bb2',
        'B2',
        'C3',
        'Cs3',
      ])
    })
  })
})
