import "./App.css"
import { Link } from "react-router-dom"

function App() {
  return (
    <div>
      <h1 className="title">Band Fingerings</h1>
      <p className="subtitle">Learn fingerings for any band instrument</p>
      <h2 className="section-heading">Select your instrument</h2>
      <Link tabIndex={1} to={"/fhorn"}>
        French Horn
      </Link>
      <br></br>
      <Link to="/euphonium" tabIndex={2}>
        Euphonium
      </Link>
      <p>Other instruments coming soon!</p>
    </div>
  )
}

export default App
