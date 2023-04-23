import { BaseSyntheticEvent } from 'react'
import { ValveProps } from '../types'
import { isKeyEvent } from '../helpers/functions'

export default function HornThumbValve({
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
      className="svg"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      width="76"
      height="81"
      viewBox="0 0 76 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_2_5" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.9919 80.1915C62.2539 76.4422 76 60.0964 76 40.5C76 18.1325 58.0914 0 36 0C20.1738 0 6.49423 9.30607 0.00806808 22.8085C2.59045 22.2783 5.26312 22 8 22C30.0914 22 48 40.1325 48 62.5C48 68.8435 46.5596 74.8463 43.9919 80.1915Z"
        />
      </mask>
      <path
        className={` ${selected?.includes(valve) && 'selected'}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.9919 80.1915C62.2539 76.4422 76 60.0964 76 40.5C76 18.1325 58.0914 0 36 0C20.1738 0 6.49423 9.30607 0.00806808 22.8085C2.59045 22.2783 5.26312 22 8 22C30.0914 22 48 40.1325 48 62.5C48 68.8435 46.5596 74.8463 43.9919 80.1915Z"
        fill="none"
      />
      <path
        d="M43.9919 80.1915L43.0905 79.7585L42.2171 81.5768L44.193 81.1711L43.9919 80.1915ZM0.00806808 22.8085L-0.893325 22.3755L-1.76676 24.1937L0.209182 23.7881L0.00806808 22.8085ZM75 40.5C75 59.6207 61.5887 75.5579 43.7908 79.2119L44.193 81.1711C62.9191 77.3265 77 60.5722 77 40.5H75ZM36 1C57.5274 1 75 18.673 75 40.5H77C77 17.5919 58.6554 -1 36 -1V1ZM0.909461 23.2415C7.23772 10.0678 20.5777 1 36 1V-1C19.7699 -1 5.75074 8.54436 -0.893325 22.3755L0.909461 23.2415ZM0.209182 23.7881C2.72579 23.2714 5.33109 23 8 23V21C5.19515 21 2.4551 21.2852 -0.193045 21.8289L0.209182 23.7881ZM8 23C29.5274 23 47 40.673 47 62.5H49C49 39.5919 30.6553 21 8 21V23ZM47 62.5C47 68.6907 45.5946 74.5458 43.0905 79.7585L44.8933 80.6245C47.5247 75.1468 49 68.9962 49 62.5H47Z"
        fill="black"
        mask="url(#path-1-inside-1_2_5)"
      />
    </svg>
  )
}
