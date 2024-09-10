import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

// import lazyLoad from "@/utils/lazyLoad"
const NotFound = lazy(() => import("@/pages/404"))
const errPage: RouteObject[] = [
  {
    path: "404",
    // element: lazyLoad("pages/404"),
    element: <NotFound></NotFound>,
  },
]
export default errPage
