import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <h1 className="title">Band Fingerings</h1>
      <p className="subtitle">Learn fingerings for any band instrument!</p>
      <h2 className="section-heading">Select your instrument:</h2>
      <div className="links">
        <Link className="link" tabIndex={0} to="/fhorn">
          French Horn
        </Link>
        <br />
        <Link className="link" to="/euphonium" tabIndex={0}>
          Euphonium
        </Link>
        <br />
        <Link className="link" to="/trumpet" tabIndex={0}>
          Trumpet
        </Link>
      </div>
      <p>Other instruments are coming soon!</p>
    </div>
  )
}

export default App
