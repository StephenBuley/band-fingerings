import { HornFingerValveProps } from '../types'

export default function HornFingerValve({ valveNumber }: HornFingerValveProps) {
  return (
    <svg
      className="svg"
      width="80"
      height="150"
      viewBox="0 0 80 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id={`valve-${valveNumber}`}
        d="M79.5 75C79.5 95.6452 75.0359 114.311 67.8431 127.798C60.6388 141.306 50.7711 149.5 40 149.5C29.2289 149.5 19.3612 141.306 12.1569 127.798C4.96408 114.311 0.5 95.6452 0.5 75C0.5 54.3548 4.96408 35.6888 12.1569 22.2023C19.3612 8.69425 29.2289 0.5 40 0.5C50.7711 0.5 60.6388 8.69425 67.8431 22.2023C75.0359 35.6888 79.5 54.3548 79.5 75Z"
        stroke="black"
      />
    </svg>
  )
}
