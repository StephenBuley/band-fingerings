import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { InstrumentPage } from "./components/InstrumentPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fhorn",
    element: <InstrumentPage name="French Horn" />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
