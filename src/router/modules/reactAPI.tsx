import lazy from "@loadable/component"

import Layout from "@/layout"

const CloneElementBase = lazy(() => import("@/pages/reactAPI/cloneElement/Base"))
const ArrayRef = lazy(() => import("@/pages/reactAPI/ref/ArrayRef"))
const RefUpdate = lazy(() => import("@/pages/reactAPI/ref/RefUpdate"))
const NoFlushSyncBug = lazy(() => import("@/pages/reactAPI/flushSync/NoFlushSyncBug"))
const FlushSyncFix = lazy(() => import("@/pages/reactAPI/flushSync/FlushSyncFix"))
const BaseCreatePortal = lazy(() => import("@/pages/reactAPI/createPortal/Base"))
const UnmountRemoveStorage = lazy(() => import("@/pages/reactAPI/unmount/UnmountRemoveStorage"))
const DefaultMemo = lazy(() => import("@/pages/reactAPI/memo/DefaultMemo"))
const MemoFunction = lazy(() => import("@/pages/reactAPI/memo/MemoFunction"))
const LazyComp = lazy(() => import("@/pages/reactAPI/suspense/LazyComp"))
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
    {
      path: "ref/*",
      children: [
        { path: "ArrayRef", element: <ArrayRef /> },
        { path: "RefUpdate", element: <RefUpdate /> },
      ],
    },
    {
      path: "createPortal/*",
      children: [{ path: "BaseCreatePortal", element: <BaseCreatePortal /> }],
    },
    {
      path: "unmount/*",
      children: [{ path: "UnmountRemoveStorage", element: <UnmountRemoveStorage /> }],
    },
    {
      path: "memo/*",
      children: [
        { path: "DefaultMemo", element: <DefaultMemo /> },
        { path: "MemoFunction", element: <MemoFunction /> },
      ],
    },
    {
      path: "suspense/*",
      children: [{ path: "LazyComp", element: <LazyComp /> }],
    },
  ],
}
export default reactAPIRoutes
