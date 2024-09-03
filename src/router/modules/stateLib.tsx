import lazy from "@loadable/component"

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
        // {
        //   path: "Middleware",
        //   element: <Middleware />,
        // },
      ],
    },
  ],
}
export default stateLibRoutes
