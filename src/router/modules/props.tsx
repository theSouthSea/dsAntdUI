import lazy from "@loadable/component"

import Layout from "@/layout"

const PropsStepTwo = lazy(() => import("@/pages/best/props/PropsStepTwo"))
const PropsStepThree = lazy(() => import("@/pages/best/props/PropsStepThree"))
const PropsStepFour = lazy(() => import("@/pages/best/props/PropsStepFour"))
export default {
  path: "props/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <PropsStepTwo /> },
    { path: "steptwo", element: <PropsStepTwo /> },
    { path: "stepthree", element: <PropsStepThree /> },
    { path: "stepfour", element: <PropsStepFour /> },
  ],
}
