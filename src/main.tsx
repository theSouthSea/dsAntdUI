import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"

// import { RouterProvider, BrowserRouter } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
// import router from "@/router"
// import router from "@/router/routes"
// import Router from "@/router/routesOld"
import ProjectRouter from "@/router/Router"

import GrandParentChildProvider from "./pages/best/GrandParentChildProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GrandParentChildProvider>
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter>
        <Router></Router>
      </BrowserRouter> */}
      <ProjectRouter></ProjectRouter>
    </GrandParentChildProvider>
  </React.StrictMode>
)
