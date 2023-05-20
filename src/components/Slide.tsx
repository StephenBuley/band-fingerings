import { SlideProps } from '../types'

export default function Slide({ handleSlideChange, selected }: SlideProps) {
  const value = selected[0]

  return (
    <>
      <label htmlFor="slide">{value}</label>
      <input
        type="range"
        id="slide"
        value={value}
        onChange={(e) => handleSlideChange(e.target.value)}
        min={1}
        max={7}
        step={1}
      />
    </>
  )
}
