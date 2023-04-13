/* eslint-disable */
import './Button.css'
import { ButtonProps } from '../types'

function Button({
  text,
  tabIndex,
  type,
  handleFingeringClick,
  handleActionButtonClick,
  selected,
}: ButtonProps) {
  return (
    <div
      onClick={() => {
        type === 'action'
          ? handleActionButtonClick?.()
          : handleFingeringClick?.(text)
      }}
      className={`btn ${type === 'action' && 'btn-submit'} ${
        selected.includes(text) && 'selected'
      }`}
      tabIndex={tabIndex}
    >
      {text}
    </div>
  )
}

export default Button
