import { lazy } from "@loadable/component"

import Layout from "@/layout"

const NoPropsChild = lazy(() => import("@/pages/rerender/NoPropsChild"))
const NoPropsChildFix = lazy(() => import("@/pages/rerender/NoPropsChildFix"))
const ListPage = lazy(() => import("@/pages/rerender/ListPage"))
const rerenderRoutes = {
  path: "rerender/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <NoPropsChild /> },
    { path: "nopropschild", element: <NoPropsChild /> },
    { path: "nopropschildfix", element: <NoPropsChildFix /> },
    { path: "listpage", element: <ListPage /> },
  ],
}
export default rerenderRoutes
