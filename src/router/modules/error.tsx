import lazy from "@loadable/component"

import Layout from "@/layout"

const ErrorStepOne = lazy(() => import("@/pages/best/error/ErrorStepOne"))
const ErrorStepTwo = lazy(() => import("@/pages/best/error/ErrorStepTwo"))
const ErrorStepThree = lazy(() => import("@/pages/best/error/ErrorStepThree"))
const ErrorStepFour = lazy(() => import("@/pages/best/error/ErrorStepFour"))
const ErrorStepFive = lazy(() => import("@/pages/best/error/ErrorStepFive"))
const ErrorStepSix = lazy(() => import("@/pages/best/error/ErrorStepSix"))
const ErrorStepSeven = lazy(() => import("@/pages/best/error/ErrorStepSeven"))
const ErrorStepEight = lazy(() => import("@/pages/best/error/ErrorStepEight"))

export default {
  path: "error/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <ErrorStepOne /> },
    { path: "stepone", element: <ErrorStepOne /> },
    { path: "steptwo", element: <ErrorStepTwo /> },
    { path: "stepthree", element: <ErrorStepThree /> },
    { path: "stepfour", element: <ErrorStepFour /> },
    { path: "stepfive", element: <ErrorStepFive /> },
    { path: "stepsix", element: <ErrorStepSix /> },
    { path: "stepseven", element: <ErrorStepSeven /> },
    { path: "stepeight", element: <ErrorStepEight /> },
  ],
}
