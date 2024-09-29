import lazy from "@loadable/component"
import { lazy as rLazy } from "react"

import Layout from "@/layout"

const KeyBug = lazy(() => import("@/pages/bugfix/KeyBug"))
const ObjArrayBug = lazy(() => import("@/pages/bugfix/ObjArray/Bug"))
const ObjArrayFix = lazy(() => import("@/pages/bugfix/ObjArray/Fix"))
const ImmerFix = rLazy(() => import("@/pages/bugfix/ObjArray/ImmerFix"))
const ObjArrayDemo = lazy(() => import("@/pages/bugfix/ObjArray/ObjArrayDemo"))
const ObjBug = lazy(() => import("@/pages/bugfix/Obj/ObjBug"))
const ObjBug1 = lazy(() => import("@/pages/bugfix/Obj/ObjBug1"))
const ObjFix = lazy(() => import("@/pages/bugfix/Obj/ObjFix"))
const ImmerFixObjBug = lazy(() => import("@/pages/bugfix/Obj/ImmerFixObjBug"))
const MultipleStateBug = lazy(() => import("@/pages/bugfix/State/MultipleStateBug"))
const MultipleStateFix = lazy(() => import("@/pages/bugfix/State/MultipleStateFix"))
const BatchUpdate = lazy(() => import("@/pages/bugfix/State/BatchUpdate"))
const RenderSetState = lazy(() => import("@/pages/bugfix/update/RenderSetState"))
const ArrayMap = lazy(() => import("@/pages/bugfix/ArrayMap"))
export default {
  path: "bugfix/*",
  element: <Layout></Layout>,
  children: [
    {
      path: "KeyBug",
      element: <KeyBug />,
      // children: [
      //   {
      //     index: true,
      //     element: <KeyBug />,
      //   },
      // ],
    },
    {
      path: "ArrayMap",
      element: <ArrayMap />,
    },
    {
      path: "ObjArray/*",
      children: [
        {
          path: "Bug",
          element: <ObjArrayBug />,
        },
        {
          path: "Fix",
          element: <ObjArrayFix />,
        },
        {
          path: "ImmerFix",
          element: <ImmerFix />,
        },
        {
          path: "ObjArrayDemo",
          element: <ObjArrayDemo />,
        },
      ],
    },
    {
      path: "Obj/*",
      children: [
        {
          path: "ObjBug",
          element: <ObjBug />,
        },
        {
          path: "ObjFix",
          element: <ObjFix />,
        },
        {
          path: "ImmerFixObjBug",
          element: <ImmerFixObjBug />,
        },
        {
          path: "ObjBug1",
          element: <ObjBug1 />,
        },
      ],
    },
    {
      path: "State/*",
      children: [
        {
          path: "MultipleStateBug",
          element: <MultipleStateBug />,
        },
        {
          path: "MultipleStateFix",
          element: <MultipleStateFix />,
        },
        {
          path: "BatchUpdate",
          element: <BatchUpdate />,
        },
      ],
    },
    {
      path: "update/*",
      children: [
        {
          path: "RenderSetState",
          element: <RenderSetState />,
        },
      ],
    },
  ],
}
