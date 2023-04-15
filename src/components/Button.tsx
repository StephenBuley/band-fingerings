/* eslint-disable */
import './Button.css'
import { ButtonProps } from '../types'

function Button<T>({
  text,
  tabIndex,
  type,
  handleFingeringClick,
  handleActionButtonClick,
  selected,
  fingering,
}: ButtonProps<T>) {
  return (
    <div
      onClick={() => {
        type === 'action'
          ? handleActionButtonClick?.(fingering)
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
