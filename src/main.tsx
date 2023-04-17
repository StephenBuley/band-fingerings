import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import InstrumentPage from './components/InstrumentPage'
import { euphonium, fhorn } from './helpers/fingerings'
import { EuphoniumFingering, FrenchHornFingering } from './helpers/types'

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
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
