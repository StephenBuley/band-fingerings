import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="title">Learn 2 Play</h1>
      <p className="subtitle">
        Learn valve and finger combos for any band instrument!
      </p>
      <h2 className="section-heading">Select your instrument:</h2>
      <div className="links">
        <Link tabIndex={0} to="/fhorn">
          French Horn
        </Link>
        <br />
        <Link to="/euphonium" tabIndex={0}>
          Euphonium
        </Link>
        <br />
        <Link to="/trumpet" tabIndex={0}>
          Trumpet
        </Link>
      </div>
      <p>Other instruments are coming soon!</p>
    </div>
  )
}

export default App
