import { BaseSyntheticEvent } from 'react'
import { ValveProps } from '../types'
import { isKeyEvent } from '../helpers/functions'

export default function BrassValve({
  valve,
  handleFingeringClick,
  selected,
}: ValveProps) {
  function onClick(e: BaseSyntheticEvent) {
    if (isKeyEvent(e)) {
      if (e.key === 'Enter') {
        handleFingeringClick?.(valve)
      }
    } else {
      handleFingeringClick?.(valve)
    }
  }

  return (
    <svg
      className={`svg ${selected?.includes(valve) && 'selected'}`}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="81" fill="white" />
      <path
        d="M79.5 40.5C79.5 62.5973 61.8094 80.5 40 80.5C18.1906 80.5 0.5 62.5973 0.5 40.5C0.5 18.4027 18.1906 0.5 40 0.5C61.8094 0.5 79.5 18.4027 79.5 40.5Z"
        stroke="black"
      />
    </svg>
  )
}
