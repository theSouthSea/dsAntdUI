import lazy from "@loadable/component"

import Layout from "@/layout"

const CloneElementBase = lazy(() => import("@/pages/reactAPI/cloneElement/Base"))
const ArrayRef = lazy(() => import("@/pages/reactAPI/ref/ArrayRef"))
const NoFlushSyncBug = lazy(() => import("@/pages/reactAPI/flushSync/NoFlushSyncBug"))
const FlushSyncFix = lazy(() => import("@/pages/reactAPI/flushSync/FlushSyncFix"))
const BaseCreatePortal = lazy(() => import("@/pages/reactAPI/createPortal/Base"))
const reactAPIRoutes = {
  path: "reactAPI/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "cloneElement/*",
      children: [{ path: "base", element: <CloneElementBase /> }],
    },
    {
      path: "flushSync/*",
      children: [
        { path: "NoFlushSyncBug", element: <NoFlushSyncBug /> },
        { path: "FlushSyncFix", element: <FlushSyncFix /> },
      ],
    },
    { path: "ref/*", children: [{ path: "ArrayRef", element: <ArrayRef /> }] },
    {
      path: "createPortal/*",
      children: [{ path: "BaseCreatePortal", element: <BaseCreatePortal /> }],
    },
  ],
}
export default reactAPIRoutes
