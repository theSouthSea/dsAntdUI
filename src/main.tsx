import "./index.css"
import "./scrollbar.css"
import "../mock"

import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import AppDelivery from "./AppDelivery"
import { store } from "./store"

// import { RouterProvider, BrowserRouter } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
// import router from "@/router"
// import router from "@/router/routes"
// import Router from "@/router/routesOld"
/* 有效路由--开始 */
// import ProjectRouter from "@/router/Router"
// ReactDOM.createRoot(document.getElementById("root")!).render(<ProjectRouter></ProjectRouter>)
/* 有效路由--结束 */

// import ConfigContextProvider from "./pages/base/context/ConfigContext"
// import GrandParentChildProvider from "./pages/best/GrandParentChildProvider"
// import { GrandProvider as GrandParentChildProvider } from "./pages/best/GrandParentChildOptimize1"

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* <GrandParentChildProvider>
//       <RouterProvider router={router} />
//       <BrowserRouter>
//         <Router></Router>
//       </BrowserRouter>
//       <ProjectRouter></ProjectRouter>
//     </GrandParentChildProvider> */}
//     {/* <ConfigContextProvider>
//       <ProjectRouter></ProjectRouter>
//     </ConfigContextProvider> */}
//     <ProjectRouter></ProjectRouter>
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppDelivery />
    </BrowserRouter>
  </Provider>,
)
