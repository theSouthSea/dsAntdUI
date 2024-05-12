import { lazy } from "@loadable/component"

import Layout from "@/layout"

const ChildrenBaseDemo = lazy(() => import("@/pages/best/children/BaseDemo"))
const BaseDemoMemoFix = lazy(() => import("@/pages/best/children/BaseDemoMemoFix"))
const BaseDemoChildrenFix = lazy(() => import("@/pages/best/children/BaseDemoChildrenFix"))
const MemoChildrenComp = lazy(() => import("@/pages/best/children/MemoChildrenComp"))
const MemoRenderProps = lazy(() => import("@/pages/best/children/MemoRenderProps"))
export default {
  path: "children/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <ChildrenBaseDemo /> },
    { path: "basedemo", element: <ChildrenBaseDemo /> },
    { path: "basedemomemofix", element: <BaseDemoMemoFix /> },
    { path: "basedemochildrenfix", element: <BaseDemoChildrenFix /> },
    { path: "memochildrencomp", element: <MemoChildrenComp /> },
    { path: "memorenderprops", element: <MemoRenderProps /> },
  ],
}
