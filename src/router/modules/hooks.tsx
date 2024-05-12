import { lazy } from "@loadable/component"

import Layout from "@/layout"

const HooksBaseDemo = lazy(() => import("@/pages/best/hooks/BaseDemo"))
const hooksRoutes = {
  path: "hooks/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <HooksBaseDemo /> },
    { path: "basedemo", element: <HooksBaseDemo /> },
  ],
}
export default hooksRoutes
