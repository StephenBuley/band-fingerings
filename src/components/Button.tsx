import "./Button.css"
import { TButtonProps } from "../types"

export function Button({ text, tabIndex, type }: TButtonProps) {
  return (
    <div
      className={`btn ${type === "submit" && "btn-submit"}`}
      tabIndex={tabIndex}
    >
      {text}
    </div>
  )
}
