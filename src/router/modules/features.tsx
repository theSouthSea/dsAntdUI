import { lazy } from "react"

import Layout from "@/layout"

const EditableComp = lazy(() => import("@/pages/features/EditableComp"))
const EditableRestore = lazy(() => import("@/pages/features/contentEditable/Restore"))
const ClassEditableComp = lazy(() => import("@/pages/features/contentEditable/ClassEditableComp"))
const CursorPosition = lazy(() => import("@/pages/features/contentEditable/CursorPosition"))
const ViewBox = lazy(() => import("@/pages/features/svg/ViewBox"))
const BindParams = lazy(() => import("@/pages/features/bind/BindParams"))
const NewTestPaper = lazy(() => import("@/pages/features/NewTestPaper"))
const EventClose = lazy(() => import("@/pages/features/modalClose/EventClose"))
const OverlayClose = lazy(() => import("@/pages/features/modalClose/OverlayClose"))
const ListenerChineseInput = lazy(() => import("@/pages/features/input/ListenerChineseInput"))
export default {
  path: "features/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "EditableComp",
      element: <EditableComp />,
      // children: [
      //   {
      //     index: true,
      //     element: <KeyBug />,
      //   },
      // ],
    },
    {
      path: "contentEditable/*",
      children: [
        {
          element: <EditableRestore />,
          path: "EditableRestore",
        },
        {
          element: <ClassEditableComp />,
          path: "ClassEditableComp",
        },
        {
          element: <CursorPosition />,
          path: "CursorPosition",
        },
      ],
    },
    {
      path: "svg/*",
      children: [
        {
          path: "ViewBox",
          element: <ViewBox />,
        },
      ],
    },
    {
      path: "bind/*",
      children: [
        {
          path: "BindParams",
          element: <BindParams />,
        },
      ],
    },
    {
      path: "newTestPaper/*",
      children: [
        {
          path: ":courseId/:courseName",
          element: <NewTestPaper />,
        },
      ],
    },
    {
      path: "modalClose/*",
      children: [
        {
          path: "OverlayClose",
          element: <OverlayClose />,
        },
        {
          path: "EventClose",
          element: <EventClose />,
        },
      ],
    },
    {
      path: "input/*",
      children: [
        {
          path: "ListenerChineseInput",
          element: <ListenerChineseInput />,
        },
      ],
    },
  ],
}
