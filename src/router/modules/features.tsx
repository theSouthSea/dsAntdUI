import { lazy } from "react"

import Layout from "@/layout"

const EditableComp = lazy(() => import("@/pages/features/EditableComp"))
const ViewBox = lazy(() => import("@/pages/features/svg/ViewBox"))
export default {
  path: "features/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "EditableComp",
      element: <EditableComp />,
      // children: [
      //   {
      //     index: true,
      //     element: <KeyBug />,
      //   },
      // ],
    },
    {
      path: "svg/*",
      children: [
        {
          path: "ViewBox",
          element: <ViewBox />,
        },
      ],
    },
  ],
}
