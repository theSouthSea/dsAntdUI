import { lazy } from "react"

import Layout from "@/layout"

const CardPage = lazy(() => import("@/pages/tailwindcss/demo/CardPage"))
const visualLibRoutes = {
  path: "tailwindcss/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "demo/*",
      children: [{ path: "CardPage", element: <CardPage /> }],
    },
  ],
}
export default visualLibRoutes
