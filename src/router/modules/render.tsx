import lazy from "@loadable/component"

import Layout from "@/layout"

const ConditionRender = lazy(() => import("@/pages/best/reconciliation/ConditionRender"))
const ConditionRenderFix = lazy(() => import("@/pages/best/reconciliation/ConditionRenderFix"))
const ConditionRenderArr = lazy(() => import("@/pages/best/reconciliation/ConditionRenderArr"))
const ConditionRenderSameKey = lazy(
  () => import("@/pages/best/reconciliation/ConditionRenderSameKey")
)
const ArrayOuterKey = lazy(() => import("@/pages/best/reconciliation/ArrayOuterKey"))
const ArrayOrderConditionKey = lazy(
  () => import("@/pages/best/reconciliation/ArrayOrderConditionKey")
)
const RenderCount = lazy(() => import("@/pages/best/reconciliation/RenderCount"))

export default {
  path: "render/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <ConditionRender /> },
    { path: "conditionrender", element: <ConditionRender /> },
    { path: "conditionrenderfix", element: <ConditionRenderFix /> },
    { path: "conditionrenderarr", element: <ConditionRenderArr /> },
    { path: "conditionrendersamekey", element: <ConditionRenderSameKey /> },
    { path: "arrayouterkey", element: <ArrayOuterKey /> },
    { path: "arrayorderconditionkey", element: <ArrayOrderConditionKey /> },
    { path: "rendercount", element: <RenderCount /> },
  ],
}
