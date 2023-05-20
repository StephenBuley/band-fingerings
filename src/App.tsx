import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <h1 className="title">Band Fingerings</h1>
      <p className="subtitle">Learn fingerings for any band instrument!</p>
      <h2 className="section-heading">Select your instrument:</h2>
      <div className="links">
        <Link className="link" to="/fhorn" tabIndex={0}>
          French Horn
        </Link>
        <Link className="link" to="/euphonium" tabIndex={0}>
          Euphonium
        </Link>
        <Link className="link" to="/trumpet" tabIndex={0}>
          Trumpet
        </Link>
        <Link className="link" to="/tubaBbThreeValve" tabIndex={0}>
          Three Valve Bb Tuba
        </Link>
        <Link className="link" to="/tubaBbFourValve" tabIndex={0}>
          Four Valve Bb Tuba
        </Link>
        <Link className="link" to="/trombone" tabIndex={0}>
          Trombone
        </Link>
        <img src="../public/TromboneSlide_.svg" alt="trombone slide" />
      </div>
      <p>Other instruments are coming soon!</p>
    </div>
  )
}

export default App
