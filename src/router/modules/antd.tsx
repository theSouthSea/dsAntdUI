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
const FullScreenSpin = lazy(() => import("@/pages/antd/spin/FullScreenSpin"))
const LoadingButton = lazy(() => import("@/pages/antd/button/LoadingButton"))
const InputMaxMin = lazy(() => import("@/pages/antd/inputNumber/InputMaxMin"))
const InputAddonPrefix = lazy(() => import("@/pages/antd/inputNumber/InputAddonPrefix"))
const BaseForm = lazy(() => import("@/pages/antd/form/BaseForm"))
const UseForm = lazy(() => import("@/pages/antd/form/UseForm"))
const FormWithRef = lazy(() => import("@/pages/antd/form/FormWithRef"))
const CustomFormField = lazy(() => import("@/pages/antd/form/CustomFormField"))
const DatePickerDayjs = lazy(() => import("@/pages/antd/form/DatePickerDayjs"))
const ValidateOtherComp = lazy(() => import("@/pages/antd/form/ValidateOtherComp"))
const CustomFieldValidate = lazy(() => import("@/pages/antd/form/CustomFieldValidate"))
const LabelInValue = lazy(() => import("@/pages/antd/treeSelect/LabelInValue"))
const BaseUpload = lazy(() => import("@/pages/antd/upload/BaseUpload"))
const BeforeUpload = lazy(() => import("@/pages/antd/upload/BeforeUpload"))
const HideInFileList = lazy(() => import("@/pages/antd/upload/HideInFileList"))
const CustomPreview = lazy(() => import("@/pages/antd/upload/CustomPreview"))
const CustomInteractiveIcon = lazy(() => import("@/pages/antd/upload/CustomInteractiveIcon"))
const ImageCrop = lazy(() => import("@/pages/antd/upload/ImageCrop"))
const MyUpload1 = lazy(() => import("@/pages/antd/upload/MyUpload1"))
const CustomItemRender = lazy(() => import("@/pages/antd/upload/CustomItemRender"))
const DestroyOnClose = lazy(() => import("@/pages/antd/modal/DestroyOnClose"))
const ForceRender = lazy(() => import("@/pages/antd/modal/ForceRender"))

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
        {
          path: "FullScreenSpin",
          element: <FullScreenSpin></FullScreenSpin>,
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
        {
          path: "CustomFormField",
          element: <CustomFormField></CustomFormField>,
        },
        {
          path: "DatePickerDayjs",
          element: <DatePickerDayjs></DatePickerDayjs>,
        },
        {
          path: "ValidateOtherComp",
          element: <ValidateOtherComp></ValidateOtherComp>,
        },
        {
          path: "CustomFieldValidate",
          element: <CustomFieldValidate></CustomFieldValidate>,
        },
      ],
    },
    {
      path: "treeSelect/*",
      children: [
        {
          path: "LabelInValue",
          element: <LabelInValue></LabelInValue>,
        },
      ],
    },
    {
      path: "upload/*",
      children: [
        {
          path: "BaseUpload",
          element: <BaseUpload></BaseUpload>,
        },
        {
          path: "BeforeUpload",
          element: <BeforeUpload></BeforeUpload>,
        },
        {
          path: "HideInFileList",
          element: <HideInFileList></HideInFileList>,
        },
        {
          path: "CustomPreview",
          element: <CustomPreview></CustomPreview>,
        },
        {
          path: "CustomInteractiveIcon",
          element: <CustomInteractiveIcon></CustomInteractiveIcon>,
        },
        {
          path: "ImageCrop",
          element: <ImageCrop></ImageCrop>,
        },
        {
          path: "MyUpload1",
          element: <MyUpload1></MyUpload1>,
        },
        {
          path: "CustomItemRender",
          element: <CustomItemRender></CustomItemRender>,
        },
      ],
    },
    {
      path: "modal/*",
      children: [
        {
          path: "DestroyOnClose",
          element: <DestroyOnClose></DestroyOnClose>,
        },
        {
          path: "ForceRender",
          element: <ForceRender></ForceRender>,
        },
      ],
    },
  ],
}
