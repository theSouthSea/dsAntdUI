import { lazy } from "react"

import Layout from "@/layout"

const D3Base = lazy(() => import("@/pages/visualLib/d3/D3Base"))
const D3Ref = lazy(() => import("@/pages/visualLib/d3/D3Ref"))
const D3Bar = lazy(() => import("@/pages/visualLib/d3/D3Bar"))
const visualLibRoutes = {
  path: "visualLib/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "d3/*",
      children: [
        { path: "D3Base", element: <D3Base /> },
        { path: "D3Ref", element: <D3Ref /> },
        { path: "D3Bar", element: <D3Bar /> },
      ],
    },
  ],
}
export default visualLibRoutes
