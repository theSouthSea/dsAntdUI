import lazy from "@loadable/component"

import Layout from "@/layout"

const SplitCompOne = lazy(() => import("@/pages/best/splitComp/SplitCompOne"))
const SplitCompTwo = lazy(() => import("@/pages/best/splitComp/SplitCompTwo"))
const SplitCompThree = lazy(() => import("@/pages/best/splitComp/SplitCompThree"))
const SplitCompFour = lazy(() => import("@/pages/best/splitComp/SplitCompFour"))

export default {
  path: "splitComp/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <SplitCompOne /> },
    { path: "stepone", element: <SplitCompOne /> },
    { path: "steptwo", element: <SplitCompTwo /> },
    { path: "stepthree", element: <SplitCompThree /> },
    { path: "stepfour", element: <SplitCompFour /> },
  ],
}
