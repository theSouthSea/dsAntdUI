import lazy from "@loadable/component"

import Layout from "@/layout"

const BaseHoc = lazy(() => import("@/pages/best/hoc/BaseHoc"))
const EnhanceCallback = lazy(() => import("@/pages/best/hoc/App"))
const InterceptEvent = lazy(() => import("@/pages/best/hoc/InterceptEvent"))
const HocContextDemo = lazy(() => import("@/pages/best/hoc/HocContextDemo"))
export default {
  path: "hoc/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <BaseHoc /> },
    { path: "basehoc", element: <BaseHoc /> },
    { path: "enhancecallback", element: <EnhanceCallback /> },
    { path: "interceptevent", element: <InterceptEvent /> },
    { path: "hoccontext", element: <HocContextDemo /> },
  ],
}
