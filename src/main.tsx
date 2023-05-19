import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import InstrumentPage from './components/InstrumentPage'
import {
  euphonium,
  fhorn,
  trombone,
  trumpet,
  tubaBbFourValve,
  tubaBbThreeValve,
} from './helpers/fingerings'
import {
  FourValveFingering,
  FrenchHornFingering,
  ThreeValveFingering,
  TromboneSlidePosition,
} from './types'
import HornThumbValve from './components/HornThumbValve'
import HornFingerValve from './components/HornFingerValve'
import BrassValve from './components/BrassValve'
import { getAvailableNotes } from './helpers/functions'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="/" path="/" element={<App />} />,
    <Route
      key="/fhorn"
      path="/fhorn"
      element={
        <InstrumentPage<FrenchHornFingering>
          name="French Horn"
          clef="treble"
          fingeringSet={fhorn}
          valveSet={['T', '1', '2', '3'].map((valve) => {
            if (valve === 'T') {
              return <HornThumbValve key={valve} valve={valve} />
            }
            return <HornFingerValve key={valve} valve={valve} />
          })}
          availableNotes={getAvailableNotes('Ab3', 'C6')}
        />
      }
    />,
    <Route
      key="/euphonium"
      path="/euphonium"
      element={
        <InstrumentPage<FourValveFingering>
          name="Euphonium"
          clef="bass"
          fingeringSet={euphonium}
          valveSet={['1', '2', '3', '4'].map((valve) => (
            <BrassValve key={valve} valve={valve} />
          ))}
          availableNotes={getAvailableNotes('C2', 'E4')}
        />
      }
    />,
    <Route
      key="/trumpet"
      path="/trumpet"
      element={
        <InstrumentPage<ThreeValveFingering>
          name="Trumpet"
          clef="treble"
          fingeringSet={trumpet}
          valveSet={['1', '2', '3'].map((valve) => (
            <BrassValve key={valve} valve={valve} />
          ))}
          availableNotes={getAvailableNotes('Ab3', 'Cs6')}
        />
      }
    />,
    <Route
      key="/tubaBbThreeValve"
      path="/tubaBbThreeValve"
      element={
        <InstrumentPage<ThreeValveFingering>
          name="Three Valve Bb Tuba"
          clef="bass"
          fingeringSet={tubaBbThreeValve}
          valveSet={['1', '2', '3'].map((valve) => (
            <BrassValve key={valve} valve={valve} />
          ))}
          availableNotes={getAvailableNotes('C2', 'Bb3')}
        />
      }
    />,
    <Route
      key="/tubBbFourValve"
      path="/tubaBbFourValve"
      element={
        <InstrumentPage<FourValveFingering>
          name="Four Valve Bb Tuba"
          clef="bass"
          fingeringSet={tubaBbFourValve}
          valveSet={['1', '2', '3', '4'].map((valve) => (
            <BrassValve key={valve} valve={valve} />
          ))}
          availableNotes={getAvailableNotes('C2', 'E4')}
        />
      }
    />,
    <Route
      key="/trombone"
      path="/trombone"
      element={
        <InstrumentPage<TromboneSlidePosition>
          name="Trombone"
          clef="bass"
          fingeringSet={trombone}
          availableNotes={getAvailableNotes('E2', 'E4')}
        />
      }
    />,
  ]),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
