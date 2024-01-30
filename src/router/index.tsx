import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"
import App from "@/App.tsx"

const LazyModalDemo = lazy(() => import("@/pages/base/modal/ModalDemo"))
const NotFound = lazy(() => import("@/pages/404"))

// function SuspenseLazyComp({ LazyComp }:{ LazyComp: LazyExoticComponent<any> }) {
//   return (
//     <Suspense fallback={<div>loading</div>}>
//       <LazyComp></LazyComp>
//     </Suspense>
//   )
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/base/modal",
    // element: lazy(() => import("@/pages/base/modal/ModalDemo")),
    element: (
      <Suspense fallback={<div>loading</div>}>
        <LazyModalDemo></LazyModalDemo>
      </Suspense>
    ),
    // element: <SuspenseLazyComp LazyComp={LazyModalDemo}></SuspenseLazyComp>,
    // lazy: lazy(() => import("@/pages/base/modal/ModalDemo")),
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/404")),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>loading</div>}>
        <NotFound></NotFound>
      </Suspense>
    ),
    // async lazy() {
    //   const NotFound = await import("@/pages/404")
    //   return { Component: NotFound }
    // },
    // element: <Suspense fallback={<div>loading</div>}>
    //   {lazy(() => import("@/pages/404"))}
    // </Suspense>,
  },
])
export default router
