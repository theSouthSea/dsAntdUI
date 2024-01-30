import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider, BrowserRouter } from "react-router-dom"
import router from "@/router"
import Router from "@/router/routes"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  </React.StrictMode>
)
