import "./App.css"
import { Button } from "./components/Button"

function App() {
  return (
    <div>
      <h1 className="title">French Horn Fingerings</h1>
      <img src="./src/assets/A4.png" alt="A4" />
      <div className="buttons">
        <Button text="T" tabIndex={1} />
        <Button text="1" tabIndex={2} />
        <Button text="2" tabIndex={3} />
        <Button text="3" tabIndex={4} />
      </div>
      <button className="btn btn-submit">Check Answer</button>
      <div className="display"></div>
    </div>
  )
}

export default App
