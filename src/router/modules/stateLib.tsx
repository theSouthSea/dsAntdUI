import lazy from "@loadable/component"

import Layout from "@/layout"

const ZustandBase = lazy(() => import("@/pages/stateLib/zustand/ZustandBase"))
const Middleware = lazy(() => import("@/pages/stateLib/zustand/Middleware"))
const Persist = lazy(() => import("@/pages/stateLib/zustand/Persist"))
const MyZustand = lazy(() => import("@/pages/stateLib/zustand/MyZustand"))
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
      ],
    },
  ],
}
export default stateLibRoutes
