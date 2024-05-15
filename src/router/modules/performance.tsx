import lazy from "@loadable/component"
import { Outlet } from "react-router-dom"

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
const BatchUpdate = lazy(() => import("@/pages/best/performance/BatchUpdate"))
const UseDebounce = lazy(() => import("@/pages/best/performance/UseDebounce"))
const UseThrottle = lazy(() => import("@/pages/best/performance/UseThrottle"))
const UseDebounceUnmount = lazy(() => import("@/pages/best/performance/UseDebounceUnmount"))
const UseDebounceCbAndValue = lazy(() => import("@/pages/best/performance/UseDebounceCbAndValue"))
const UseDebounceScroll = lazy(() => import("@/pages/best/performance/UseDebounceScroll"))
const PublishSubscribe = lazy(() => import("@/pages/best/performance/PublishSubscribe"))
const StateDownPut1 = lazy(() => import("@/pages/best/performance/StateDownPut1"))
const StateDownPut2 = lazy(() => import("@/pages/best/performance/StateDownPut2"))
const StateDownPut3 = lazy(() => import("@/pages/best/performance/StateDownPut3"))
const IgnoreFnProps = lazy(() => import("@/pages/best/performance/IgnoreFnProps"))
const ListKey = lazy(() => import("@/pages/best/performance/ListKey"))
const VirtualList = lazy(() => import("@/pages/best/performance/react-window/VirtualList"))
const VirtualListHeightNotFixed = lazy(
  () => import("@/pages/best/performance/react-window/VirtualListHeightNotFixed"),
)
const RowColumn = lazy(() => import("@/pages/best/performance/react-window/RowColumn"))
const RowColumnNotFixed = lazy(
  () => import("@/pages/best/performance/react-window/RowColumnNotFixed"),
)
const ScrollingIndicate = lazy(
  () => import("@/pages/best/performance/react-window/ScrollingIndicate"),
)
const ScrollToItem = lazy(() => import("@/pages/best/performance/react-window/ScrollToItem"))
const RowColumnScrollToItem = lazy(
  () => import("@/pages/best/performance/react-window/RowColumnScrollToItem"),
)
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
    { path: "BatchUpdate", element: <BatchUpdate /> },
    { path: "UseDebounce", element: <UseDebounce /> },
    { path: "UseThrottle", element: <UseThrottle /> },
    { path: "UseDebounceUnmount", element: <UseDebounceUnmount /> },
    { path: "UseDebounceCbAndValue", element: <UseDebounceCbAndValue /> },
    { path: "UseDebounceScroll", element: <UseDebounceScroll /> },
    { path: "PublishSubscribe", element: <PublishSubscribe /> },
    { path: "StateDownPut1", element: <StateDownPut1 /> },
    { path: "StateDownPut2", element: <StateDownPut2 /> },
    { path: "StateDownPut3", element: <StateDownPut3 /> },
    { path: "IgnoreFnProps", element: <IgnoreFnProps /> },
    { path: "ListKey", element: <ListKey /> },
    {
      path: "react-window/*",
      // element: <Outlet></Outlet>,
      children: [
        { path: "VirtualList", element: <VirtualList /> },
        { path: "VirtualListHeightNotFixed", element: <VirtualListHeightNotFixed /> },
        { path: "RowColumn", element: <RowColumn /> },
        { path: "RowColumnNotFixed", element: <RowColumnNotFixed /> },
        { path: "ScrollToItem", element: <ScrollToItem /> },
        { path: "RowColumnScrollToItem", element: <RowColumnScrollToItem /> },
        { path: "ScrollingIndicate", element: <ScrollingIndicate /> },
      ],
    },
  ],
}
