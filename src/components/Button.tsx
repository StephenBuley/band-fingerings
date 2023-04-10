import "./Button.css"
import { TButtonProps } from "../types"

export function Button({
  text,
  tabIndex,
  type,
  handleClick,
  handleSubmitClick,
  selected,
}: TButtonProps) {
  return (
    <div
      onClick={() => {
        type === "submit" ? handleSubmitClick!() : handleClick!(text)
      }}
      className={`btn ${type === "submit" && "btn-submit"} ${
        selected.includes(text) && "selected"
      }`}
      tabIndex={tabIndex}
    >
      {text}
    </div>
  )
}
