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
import BrassValve from './components/BrassValve'
import { getAvailableNotes } from './helpers/functions'

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
        valveSet={['T', '1', '2', '3'].map((valve) => {
          if (valve === 'T') return <HornThumbValve key={valve} valve={valve} />
          return <HornFingerValve key={valve} valve={valve} />
        })}
        availableNotes={getAvailableNotes('C3', 'C6')}
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
        valveSet={['1', '2', '3', '4'].map((valve) => (
          <BrassValve key={valve} valve={valve} />
        ))}
        availableNotes={getAvailableNotes('B1', 'F5')}
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
        valveSet={['1', '2', '3'].map((valve) => (
          <BrassValve key={valve} valve={valve} />
        ))}
        availableNotes={getAvailableNotes('G3', 'C6')}
      />
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
