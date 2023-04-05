import "./Button.css"
import { TButtonProps } from "../types"

export function Button({
  text,
  tabIndex,
  type,
  handleClick,
  selected,
}: TButtonProps) {
  return (
    <div
      onClick={() => handleClick(type, text)}
      className={`btn ${type === "submit" && "btn-submit"} ${
        selected.includes(text) && "selected"
      }`}
      tabIndex={tabIndex}
    >
      {text}
    </div>
  )
}
