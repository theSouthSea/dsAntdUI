import lazy from "@loadable/component"

import Layout from "@/layout"
// import { lazy } from "react";

const RerenderBase = lazy(() => import("@/pages/best/RerenderBase"))
const RerenderBase1 = lazy(() => import("@/pages/best/RerenderBase1"))
const GrandParentChild = lazy(() => import("@/pages/best/GrandParentChild"))
const GrandParentChildOptimize = lazy(() => import("@/pages/best/GrandParentChildOptimize"))
const GrandParentChildOptimizeFix = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix"))
const GrandParentChildOptimizeFix1 = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix1"))
const GrandParentChildOptimize1 = lazy(() => import("@/pages/best/GrandParentChildOptimize1"))
const GrandParentChildOptimize2 = lazy(() => import("@/pages/best/GrandParentChildOptimize2"))
const GrandParentChildOptimize3 = lazy(() => import("@/pages/best/GrandParentChildOptimize3"))
const BestDemo = lazy(() => import("@/pages/best/BestDemo"))
const DebounceDemo1 = lazy(() => import("@/best/debounce/demo1"))
const DebounceDemo2 = lazy(() => import("@/best/debounce/demo2"))
const DebounceDemo = lazy(() => import("@/best/debounce/demo"))
const ErrorBoundaryDemo = lazy(() => import("@/best/AsyncErrorBoundary/demo"))
const UseDebounceDemo = lazy(() => import("@/best/debounce/demo2"))
const Controlled = lazy(() => import("@/pages/best/controlledOrNot/Controlled"))
const NotControlled = lazy(() => import("@/pages/best/controlledOrNot/NotControlled"))
const CombinedControlledOpt3 = lazy(
  () => import("@/pages/best/controlledOrNot/CombinedControlledOpt3"),
)

const bestRoutes = {
  path: "best/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <RerenderBase /> },
    { path: "rerederbase", element: <RerenderBase /> },
    { path: "rerederbase1", element: <RerenderBase1 /> },
    { path: "grandparentchild", element: <GrandParentChild /> },
    { path: "grandparentchildoptimize", element: <GrandParentChildOptimize /> },
    { path: "grandparentchildoptimizefix", element: <GrandParentChildOptimizeFix /> },
    { path: "grandparentchildoptimizefix1", element: <GrandParentChildOptimizeFix1 /> },
    { path: "grandparentchildoptimize1", element: <GrandParentChildOptimize1 /> },
    { path: "grandparentchildoptimize2", element: <GrandParentChildOptimize2 /> },
    { path: "grandparentchildoptimize3", element: <GrandParentChildOptimize3 /> },
    {
      path: "debounce/*",
      children: [
        { index: true, element: <DebounceDemo2 /> },
        { path: "demo", element: <DebounceDemo /> },
        { path: "demo1", element: <DebounceDemo1 /> },
        { path: "demo2", element: <DebounceDemo2 /> },
      ],
    },
    { path: "bestdemo", element: <BestDemo /> },
    { path: "errorboundary", element: <ErrorBoundaryDemo /> },
    { path: "useDebounce", element: <UseDebounceDemo /> },
    {
      path: "controlledOrNot/*",
      children: [
        { path: "NotControlled", element: <NotControlled /> },
        { path: "Controlled", element: <Controlled /> },
        { path: "CombinedControlledOpt3", element: <CombinedControlledOpt3 /> },
      ],
    },
  ],
}
export default bestRoutes
