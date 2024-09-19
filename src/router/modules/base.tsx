import lazy from "@loadable/component"
import { lazy as rLazy } from "react"

import Layout from "@/layout"
import SubLayout from "@/layout/SubLayout"

const ComponentWillUnmount = lazy(() => import("@/pages/base/useEffect/ComponentWillUnmount"))
const UseIsomorphicLayoutEffect = lazy(
  () => import("@/pages/base/useEffect/UseIsomorphicLayoutEffect"),
)
const ArrayState = lazy(() => import("@/pages/base/state/ArrayState"))
const AFormDemo = lazy(() => import("@/pages/base/AForm/Demo"))
const AFormDemoOpt = lazy(() => import("@/pages/base/AForm/DemoOpt"))
const FormBaseDemo = lazy(() => import("@/pages/base/AForm/BaseDemo"))
const UseForm = lazy(() => import("@/pages/base/AForm/UseForm"))
const RefFormValue = lazy(() => import("@/pages/base/AForm/RefFormValue"))
const BasePortal = lazy(() => import("@/pages/base/portal/BasePortal"))
const MyPortal = lazy(() => import("@/pages/base/portal/MyPortal"))
const MyPortalRef = lazy(() => import("@/pages/base/portal/MyPortalRef"))
const MutationObserverBase = lazy(() => import("@/pages/base/mutationObserver/Base"))
const MutationObserver = lazy(() => import("@/pages/base/mutationObserver/MyMutationObserver"))
const CopyBase = lazy(() => import("@/pages/base/copy/CopyBase"))
const MyCopy = lazy(() => import("@/pages/base/copy/MyCopy"))
const CustomInterview = lazy(() => import("@/pages/base/upload/CustomInterview"))
const IconRender = lazy(() => import("@/pages/base/upload/IconRender"))
const InlineCheckbox = rLazy(() => import("@/pages/base/checkbox/InlineCheckbox"))
const CustomCheckbox = lazy(() => import("@/pages/base/checkbox/CustomCheckbox"))
const HiddenCheckbox = lazy(() => import("@/pages/base/checkbox/HiddenCheckbox"))
export default {
  path: "base/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "useEffect/*",
      element: <SubLayout title="useEffect"></SubLayout>,
      children: [
        {
          path: "componentWillUnmount",
          element: <ComponentWillUnmount />,
        },
        {
          path: "useIsomorphicLayoutEffect",
          element: <UseIsomorphicLayoutEffect />,
        },
      ],
    },
    {
      path: "state/*",
      element: <SubLayout title="state"></SubLayout>,
      children: [
        {
          path: "arrayState",
          element: <ArrayState />,
        },
      ],
    },
    {
      path: "AForm/*",
      element: <SubLayout title="AForm Demo"></SubLayout>,
      children: [
        {
          path: "demo",
          element: <AFormDemo />,
        },
        {
          path: "demoOpt",
          element: <AFormDemoOpt />,
        },
        {
          path: "BaseDemo",
          element: <FormBaseDemo />,
        },
        {
          path: "UseForm",
          element: <UseForm />,
        },
        {
          path: "RefFormValue",
          element: <RefFormValue />,
        },
      ],
    },
    {
      path: "portal/*",
      // element: <SubLayout title="AForm Demo"></SubLayout>,
      children: [
        {
          path: "BasePortal",
          element: <BasePortal />,
        },
        {
          path: "MyPortal",
          element: <MyPortal />,
        },
        {
          path: "MyPortalRef",
          element: <MyPortalRef />,
        },
      ],
    },
    {
      path: "mutationObserver/*",
      children: [
        {
          path: "MutationObserverBase",
          element: <MutationObserverBase></MutationObserverBase>,
        },
        {
          path: "MutationObserver",
          element: <MutationObserver></MutationObserver>,
        },
      ],
    },
    {
      path: "copy/*",
      children: [
        {
          path: "CopyBase",
          element: <CopyBase></CopyBase>,
        },
        {
          path: "MyCopy",
          element: <MyCopy></MyCopy>,
        },
      ],
    },
    {
      path: "upload/*",
      children: [
        {
          path: "CustomInterview",
          element: <CustomInterview></CustomInterview>,
        },
        {
          path: "IconRender",
          element: <IconRender></IconRender>,
        },
      ],
    },
    {
      path: "checkbox/*",
      children: [
        {
          path: "CustomCheckbox",
          element: <CustomCheckbox></CustomCheckbox>,
        },
        {
          path: "InlineCheckbox",
          element: <InlineCheckbox></InlineCheckbox>,
        },
        {
          path: "HiddenCheckbox",
          element: <HiddenCheckbox></HiddenCheckbox>,
        },
      ],
    },
  ],
}
