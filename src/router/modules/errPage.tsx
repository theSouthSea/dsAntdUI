import type { RouteObject } from "react-router-dom"

import lazyLoad from "@/utils/lazyLoad"

const errPage: RouteObject[] = [
  {
    path: "/404",
    element: lazyLoad("pages/404"),
  },
]
export default errPage
