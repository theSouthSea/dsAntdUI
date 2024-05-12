import type { RouteObject } from "react-router-dom"
import { Navigate } from "react-router-dom"

import LayoutSidebar from "@/pages/layout/sidebar"
import Login from "@/pages/login/login"

// 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx", {
  eager: true,
  import: "default",
})
// 处理路由
export let routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((key) => {
  routerArray = routerArray.concat(metaRouters[key] as RouteObject[])
})

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/hooks" />,
  },
  {
    path: "/layout",
    element: <LayoutSidebar></LayoutSidebar>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]
export default routes
