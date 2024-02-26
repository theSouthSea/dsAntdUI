import React, { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import Layout from "@/layout/Layout"
import App from "@/App"
import loadable from "@loadable/component"
// import loadable from "react-loadable" // 过时了6年前更新的
const LazyBestDemo = React.lazy(() => import("@/pages/best/BestDemo"))
const LodableSlogan = loadable(() => import("@/pages/Slogan"))
const LodableAbout = loadable(() => import("@/pages/About"), {
  fallback: <div>懒加载路由ing...</div>,
})
const LodableRerenderBase = loadable(() => import("@/pages/best/RerenderBase"), {
  fallback: <div>懒加载路由ing...</div>,
})
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <App></App>,
      },
      {
        path: "home",
        // component: lazy(() => import("@/pages/Slogan")),
        element: <LodableSlogan />,
        children: [
          {
            path: "about",
            // component: lazy(() => import("@/pages/About")),
            element: <LodableAbout />,
            // component: loadable(() => import("@/pages/About"), {
            //   fallback: <div>懒加载路由ing...</div>,
            // }),
          },
        ],
      },
      {
        path: "best",
        children: [
          {
            path: "BestDemo",
            // element: lazy(() => import("@/pages/base/modal/ModalDemo")),
            element: (
              <Suspense fallback={<div>loading</div>}>
                <LazyBestDemo></LazyBestDemo>
              </Suspense>
            ),
            // element: <SuspenseLazyComp LazyComp={LazyModalDemo}></SuspenseLazyComp>,
            // lazy: lazy(() => import("@/pages/base/modal/ModalDemo")),
          },
          {
            path: "BestDemo",
            // element: lazy(() => import("@/pages/base/modal/ModalDemo")),
            element: <LodableRerenderBase></LodableRerenderBase>,
          },
        ],
      },
    ],
  },
])

// 不能这样加载
// function LoadableComp({ path }: { path: string }) {
//   const Comp = loadable(() => import(path), {
//     fallback: <div>懒加载路由ing...</div>,
//   })
//   return <Comp />
// }

export default routes
