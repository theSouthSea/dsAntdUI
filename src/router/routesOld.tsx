// 这个主要是路由表组件的写法
import { lazy, Suspense } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

import App from "@/App"
import Layout from "@/layout/Layout"

const RouteTable: SyncRoute.Routes[] = [
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
        component: lazy(() => import("@/pages/Slogan")),
        children: [
          {
            path: "about",
            component: lazy(() => import("@/pages/About")),
          },
        ],
      },
    ],
  },
]
const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
  const mRouteTable: RouteObject[] = []
  table.forEach((route) => {
    const realRoute = {
      index: route.index ? true : false,
      path: route.path,
      element: route.component ? (
        <Suspense fallback={<div>路由加载ing...</div>}>
          <route.component />
        </Suspense>
      ) : (
        route.element
      ),
      children: route.children && syncRouter(route.children),
    } as RouteObject
    // if (route.index) {
    //   route.index = true
    //   // (realRoute as RouteObject).index = true
    // }
    mRouteTable.push(realRoute)
  })
  return mRouteTable
}
// 直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable))
