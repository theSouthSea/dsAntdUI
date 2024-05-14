import lazy from "@loadable/component"

import Layout from "@/layout"

const ArrayStepOne = lazy(() => import("@/pages/best/performance/ArrayStepOne"))
const ArrayStepTwo = lazy(() => import("@/pages/best/performance/ArrayStepTwo"))
const ContextStepOne = lazy(() => import("@/pages/best/performance/ContextStepOne"))
const ContextStepTwo = lazy(() => import("@/pages/best/performance/ContextStepTwo"))
const StateMovedDown = lazy(() => import("@/pages/best/performance/StateMovedDown"))
const ChildrenMemoComp = lazy(() => import("@/pages/best/performance/ChildrenMemoComp"))
const PropsMemoComp = lazy(() => import("@/pages/best/performance/PropsMemoComp"))
const MemoChildren = lazy(() => import("@/pages/best/performance/MemoChildren"))
const HookUpdateByNeed = lazy(() => import("@/pages/best/performance/HookUpdateByNeed"))
const LazyLoad = lazy(() => import("@/pages/best/performance/LazyLoad"))
const LazyRender = lazy(() => import("@/pages/best/performance/LazyRender"))
export default {
  path: "performance/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <ArrayStepOne /> },
    { path: "arraystepone", element: <ArrayStepOne /> },
    { path: "arraysteptwo", element: <ArrayStepTwo /> },
    { path: "contextstepone", element: <ContextStepOne /> },
    { path: "contextsteptwo", element: <ContextStepTwo /> },
    { path: "statemoveddown", element: <StateMovedDown /> },
    { path: "childrenmemocomp", element: <ChildrenMemoComp /> },
    { path: "propsmemocomp", element: <PropsMemoComp /> },
    { path: "memochildren", element: <MemoChildren /> },
    { path: "HookUpdateByNeed", element: <HookUpdateByNeed /> },
    { path: "LazyLoad", element: <LazyLoad /> },
    { path: "LazyRender", element: <LazyRender /> },
  ],
}
