import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, BrowserRouter } from "react-router-dom"
// import router from "@/router"
import router from "@/router/routes"
import Router from "@/router/routesOld"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Router></Router>
    </BrowserRouter> */}
  </React.StrictMode>
)
