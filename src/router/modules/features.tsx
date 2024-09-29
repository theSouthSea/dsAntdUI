import { lazy } from "react"

import Layout from "@/layout"

const EditableComp = lazy(() => import("@/pages/features/EditableComp"))
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
  ],
}
