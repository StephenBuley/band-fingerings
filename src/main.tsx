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
        valves={['T', '1', '2', '3']}
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
        valves={['1', '2', '3', '4']}
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
        valves={['1', '2', '3']}
      />
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
