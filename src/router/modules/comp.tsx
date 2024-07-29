import lazy from "@loadable/component"

import Layout from "@/layout"

const SplitCompOne = lazy(() => import("@/pages/best/splitComp/SplitCompOne"))
const BaseForm = lazy(() => import("@/pages/base/form/ClassForm/Demo"))
const BadModalDemo = lazy(() => import("@/pages/base/modal/BadModalDemo"))
const BadModalDemoFix = lazy(() => import("@/pages/base/modal/BadModalDemoFix"))
const MessageDemo = lazy(() => import("@/pages/base/message/MessageDemo"))
const BasicListExample = lazy(() => import("@/pages/business/list/ListPage"))
const GridAnyColumn = lazy(() => import("@/pages/base/gridLayout/GridAnyColumn"))
const GridOffset = lazy(() => import("@/pages/base/gridLayout/GridOffset"))
export default {
  path: "comp/*",
  element: <Layout></Layout>,
  children: [
    { index: true, element: <SplitCompOne /> },
    { path: "form", element: <BaseForm /> },
    { path: "badmodaldemo", element: <BadModalDemo /> },
    { path: "badmodaldemofix", element: <BadModalDemoFix /> },
    { path: "messagedemo", element: <MessageDemo /> },
    { path: "listdemo", element: <BasicListExample /> },
    { path: "GridAnyColumn", element: <GridAnyColumn /> },
    { path: "GridOffset", element: <GridOffset /> },
  ],
}
