import { lazy } from "@loadable/component"

import Layout from "@/layout"

const CloneElementBase = lazy(() => import("@/pages/cloneElement/Base"))
const reactAPIRoutes = {
  path: "cloneElement/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <CloneElementBase /> },
    { path: "base", element: <CloneElementBase /> },
  ],
}
export default reactAPIRoutes
