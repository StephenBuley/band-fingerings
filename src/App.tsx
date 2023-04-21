import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="title">Band Fingerings</h1>
      <p className="subtitle">Learn fingerings for any band instrument</p>
      <h2 className="section-heading">Select your instrument</h2>
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
      <p>Other instruments coming soon!</p>
    </div>
  )
}

export default App
