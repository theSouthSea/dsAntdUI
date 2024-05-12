import lazy from "@loadable/component"

import Layout from "@/layout"

const Spring = lazy(() => import("@/pages/animation/Spring"))

export default {
  path: "animation/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <Spring /> },
    { path: "spring", element: <Spring /> },
  ],
}
