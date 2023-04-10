import "./Button.css"
import { TButtonProps } from "../types"

export function Button({
  text,
  tabIndex,
  type,
  handleFingeringClick,
  handleActionButtonClick,
  selected,
}: TButtonProps) {
  return (
    <div
      onClick={() => {
        type === "action"
          ? handleActionButtonClick!()
          : handleFingeringClick!(text)
      }}
      className={`btn ${type === "action" && "btn-submit"} ${
        selected.includes(text) && "selected"
      }`}
      tabIndex={tabIndex}
    >
      {text}
    </div>
  )
}
