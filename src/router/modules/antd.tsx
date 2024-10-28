import { lazy } from "react"

import Layout from "@/layout"

const ThemeVariable = lazy(() => import("@/pages/antd/theme/ThemeVariable"))
const ThemeAlgorithm = lazy(() => import("@/pages/antd/theme/ThemeAlgorithm"))
const ThemeModify = lazy(() => import("@/pages/antd/theme/ThemeModify"))
const DisabledMotion = lazy(() => import("@/pages/antd/theme/DisabledMotion"))
const DynamicSwitch = lazy(() => import("@/pages/antd/theme/DynamicSwitch"))
const ThemeNested = lazy(() => import("@/pages/antd/theme/ThemeNested"))
const UseToken = lazy(() => import("@/pages/antd/theme/UseToken"))
const SliderMarks = lazy(() => import("@/pages/antd/slider/SliderMarks"))
const SliderValue = lazy(() => import("@/pages/antd/slider/SliderValue"))
const SliderDynamicTheme = lazy(() => import("@/pages/antd/slider/SliderDynamicTheme"))
const TabsCache = lazy(() => import("@/pages/antd/tabs/TabsCache"))
const TabsSvgBug = lazy(() => import("@/pages/antd/tabs/TabsSvgBug"))
const StepsCache = lazy(() => import("@/pages/antd/steps/StepsCache"))
const RequestLoading = lazy(() => import("@/pages/antd/spin/RequestLoading"))
const GlobalLoading = lazy(() => import("@/pages/antd/spin/GlobalLoading"))
const LoadingButton = lazy(() => import("@/pages/antd/button/LoadingButton"))
const InputMaxMin = lazy(() => import("@/pages/antd/inputNumber/InputMaxMin"))
const InputAddonPrefix = lazy(() => import("@/pages/antd/inputNumber/InputAddonPrefix"))
const BaseForm = lazy(() => import("@/pages/antd/form/BaseForm"))
const UseForm = lazy(() => import("@/pages/antd/form/UseForm"))
const FormWithRef = lazy(() => import("@/pages/antd/form/FormWithRef"))

export default {
  path: "antd/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "theme/*",
      children: [
        {
          path: "ThemeVariable",
          element: <ThemeVariable></ThemeVariable>,
        },
        {
          path: "ThemeAlgorithm",
          element: <ThemeAlgorithm></ThemeAlgorithm>,
        },
        {
          path: "ThemeModify",
          element: <ThemeModify></ThemeModify>,
        },
        {
          path: "DisabledMotion",
          element: <DisabledMotion></DisabledMotion>,
        },
        {
          path: "DynamicSwitch",
          element: <DynamicSwitch></DynamicSwitch>,
        },
        {
          path: "ThemeNested",
          element: <ThemeNested></ThemeNested>,
        },
        {
          path: "UseToken",
          element: <UseToken></UseToken>,
        },
      ],
    },
    {
      path: "slider/*",
      children: [
        {
          path: "SliderMarks",
          element: <SliderMarks></SliderMarks>,
        },
        {
          path: "SliderValue",
          element: <SliderValue></SliderValue>,
        },
        {
          path: "SliderDynamicTheme",
          element: <SliderDynamicTheme></SliderDynamicTheme>,
        },
      ],
    },
    {
      path: "tabs/*",
      children: [
        {
          path: "TabsCache",
          element: <TabsCache></TabsCache>,
        },
        {
          path: "TabsSvgBug",
          element: <TabsSvgBug></TabsSvgBug>,
        },
      ],
    },
    {
      path: "steps/*",
      children: [
        {
          path: "StepsCache",
          element: <StepsCache></StepsCache>,
        },
      ],
    },
    {
      path: "spin/*",
      children: [
        {
          path: "RequestLoading",
          element: <RequestLoading></RequestLoading>,
        },
        {
          path: "GlobalLoading",
          element: <GlobalLoading></GlobalLoading>,
        },
      ],
    },
    {
      path: "button/*",
      children: [
        {
          path: "LoadingButton",
          element: <LoadingButton></LoadingButton>,
        },
      ],
    },
    {
      path: "inputNumber/*",
      children: [
        {
          path: "InputMaxMin",
          element: <InputMaxMin></InputMaxMin>,
        },
        {
          path: "InputAddonPrefix",
          element: <InputAddonPrefix></InputAddonPrefix>,
        },
      ],
    },
    {
      path: "form/*",
      children: [
        {
          path: "BaseForm",
          element: <BaseForm></BaseForm>,
        },
        {
          path: "UseForm",
          element: <UseForm></UseForm>,
        },
        {
          path: "FormWithRef",
          element: <FormWithRef></FormWithRef>,
        },
      ],
    },
  ],
}