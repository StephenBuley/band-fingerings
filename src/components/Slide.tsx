import { useState } from 'react'
import { roundSlideValue, snapSlideValue } from '../helpers/functions'

export default function Slide() {
  const [slideValue, setSlideValue] = useState(1)

  return (
    <>
      <label htmlFor="slide">{roundSlideValue(slideValue) / 10 || 1}</label>
      <input
        type="range"
        id="slide"
        value={slideValue}
        onChange={(e) => setSlideValue(parseInt(e.target.value))}
        onMouseUp={(e) => setSlideValue(snapSlideValue(e))}
        onTouchEnd={(e) => setSlideValue(snapSlideValue(e))}
        min={10}
        max={70}
        step={1}
      />
    </>
  )
}
