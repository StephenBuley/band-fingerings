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
    <button
      type="submit"
      onClick={onClick}
      className="btn btn-submit"
      tabIndex={0}
    >
      {text}
    </button>
  )
}

export default Button
