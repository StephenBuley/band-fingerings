import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import InstrumentPage from './components/InstrumentPage'
import { euphonium, fhorn, trumpet } from './helpers/fingerings'
import {
  EuphoniumFingering,
  FrenchHornFingering,
  ThreeValveFingering,
} from './types'
import HornThumbValve from './components/HornThumbValve'
import HornFingerValve from './components/HornFingerValve'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/fhorn',
    element: (
      <InstrumentPage<FrenchHornFingering>
        name="French Horn"
        clef="treble"
        fingeringSet={fhorn}
        valveSet={[
          <HornThumbValve key={0} valve="T" />,
          <HornFingerValve key={1} valve="1" />,
          <HornFingerValve key={2} valve="2" />,
          <HornFingerValve key={3} valve="3" />,
        ]}
      />
    ),
  },
  {
    path: '/euphonium',
    element: (
      <InstrumentPage<EuphoniumFingering>
        name="Euphonium"
        clef="bass"
        fingeringSet={euphonium}
        valveSet={[]}
      />
    ),
  },
  {
    path: '/trumpet',
    element: (
      <InstrumentPage<ThreeValveFingering>
        name="Trumpet"
        clef="treble"
        fingeringSet={trumpet}
        valveSet={[]}
      />
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
