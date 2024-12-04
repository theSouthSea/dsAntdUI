import lazy from "@loadable/component"
import { lazy as rLazy } from "react"

import Layout from "@/layout"

const ZustandBase = lazy(() => import("@/pages/stateLib/zustand/ZustandBase"))
const Middleware = lazy(() => import("@/pages/stateLib/zustand/Middleware"))
const Persist = lazy(() => import("@/pages/stateLib/zustand/Persist"))
const MyZustand = lazy(() => import("@/pages/stateLib/zustand/MyZustand"))
const ZustandFetchData = lazy(() => import("@/pages/stateLib/zustand/FetchData"))
const JotaiBase = lazy(() => import("@/pages/stateLib/jotai/JotaiBase"))
const JotaiFetchData = lazy(() => import("@/pages/stateLib/jotai/FetchData"))
const UseSetAtom = lazy(() => import("@/pages/stateLib/jotai/UseSetAtom"))
const UseAtom = lazy(() => import("@/pages/stateLib/jotai/UseAtom"))
const PerformanceBug = lazy(() => import("@/pages/stateLib/jotai/PerformanceBug"))
const PerformanceFix = lazy(() => import("@/pages/stateLib/jotai/PerformanceFix"))
const JotaiMiddleware = lazy(() => import("@/pages/stateLib/jotai/Middleware"))
const LiteDemo = lazy(() => import("@/pages/stateLib/mobx/LiteDemo"))
const MobxDemo = lazy(() => import("@/pages/stateLib/mobx/MobxDemo"))
const MobxReactDemo = lazy(() => import("@/pages/stateLib/mobx/MobxReactDemo"))
const SimpleDemo = lazy(() => import("@/pages/stateLib/mobx/SimpleDemo"))
// const MobxStoreDemo = lazy(() => import("@/pages/stateLib/mobx/StoreDemo"))
const MobxStoreDemo = rLazy(() => import("@/pages/stateLib/mobx/StoreDemo"))
const SimpleMobx = lazy(() => import("@/pages/stateLib/mobx/SimpleMobx"))
const MakeAutoObservable = lazy(() => import("@/pages/stateLib/mobx/StoreDemo/MakeAutoObservable"))
const MobxTodos = lazy(() => import("@/pages/stateLib/mobx/MobxTodos"))
const MobxTodosBeautify = lazy(() => import("@/pages/stateLib/mobx/MobxTodos/beautify"))
const MobxChild = lazy(() => import("@/pages/stateLib/mobx/MobxChild"))
const PageNotUpdate = lazy(() => import("@/pages/stateLib/mobx/PageNotUpdate"))
const PageNotUpdateFix = lazy(() => import("@/pages/stateLib/mobx/PageNotUpdateFix"))
const stateLibRoutes = {
  path: "stateLib/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "zustand/*",
      children: [
        { path: "ZustandBase", element: <ZustandBase /> },
        {
          path: "Middleware",
          element: <Middleware />,
        },
        {
          path: "Persist",
          element: <Persist />,
        },
        {
          path: "MyZustand",
          element: <MyZustand />,
        },
        {
          path: "ZustandFetchData",
          element: <ZustandFetchData />,
        },
      ],
    },
    {
      path: "jotai/*",
      children: [
        { path: "JotaiBase", element: <JotaiBase /> },
        { path: "JotaiFetchData", element: <JotaiFetchData /> },
        { path: "UseSetAtom", element: <UseSetAtom /> },
        { path: "UseAtom", element: <UseAtom /> },
        { path: "PerformanceBug", element: <PerformanceBug /> },
        { path: "PerformanceFix", element: <PerformanceFix /> },
        { path: "Middleware", element: <JotaiMiddleware /> },
      ],
    },
    {
      path: "mobx/*",
      children: [
        { path: "MobxDemo", element: <MobxDemo /> },
        { path: "LiteDemo", element: <LiteDemo /> },
        { path: "MobxReactDemo", element: <MobxReactDemo /> },
        { path: "SimpleDemo", element: <SimpleDemo /> },
        { path: "MobxStoreDemo", element: <MobxStoreDemo /> },
        { path: "SimpleMobx", element: <SimpleMobx /> },
        { path: "MakeAutoObservable", element: <MakeAutoObservable /> },
        { path: "MobxTodos", element: <MobxTodos /> },
        { path: "MobxTodosBeautify", element: <MobxTodosBeautify /> },
        { path: "MobxChild", element: <MobxChild /> },
        { path: "PageNotUpdate", element: <PageNotUpdate /> },
        { path: "PageNotUpdateFix", element: <PageNotUpdateFix /> },
      ],
    },
  ],
}
export default stateLibRoutes
