/* eslint-disable */
import './Button.css'
import { ButtonProps } from '../types'

function Button<T>({
  text,
  handleActionButtonClick,
  fingering,
}: ButtonProps<T>) {
  function onClick() {
    handleActionButtonClick(fingering)
  }

  return (
    <button onClick={onClick} className="btn btn-submit" tabIndex={0}>
      {text}
    </button>
  )
}

export default Button
