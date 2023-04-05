import "./Button.css"
import { TButtonProps } from "../types"

export function Button({ text, tabIndex }: TButtonProps) {
  return (
    <div className="btn" tabIndex={tabIndex}>
      {text}
    </div>
  )
}
