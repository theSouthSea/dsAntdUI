import { lazy } from "react"

import Layout from "@/layout"

const ContentEditableBase = lazy(
  () => import("@/pages/reactLib/contenteditable/ContentEditableBase"),
)
const ContentEditableAdvance = lazy(
  () => import("@/pages/reactLib/contenteditable/ContentEditableAdvance"),
)
const BaseUsage = lazy(() => import("@/pages/reactLib/wangEditor/BaseUsage"))

export default {
  path: "reactLib/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "interceptevent/*",
      children: [
        { path: "ContentEditableBase", element: <ContentEditableBase /> },
        { path: "ContentEditableAdvance", element: <ContentEditableAdvance /> },
      ],
    },
    {
      path: "wangEditor/*",
      children: [{ path: "BaseUsage", element: <BaseUsage /> }],
    },
  ],
}
