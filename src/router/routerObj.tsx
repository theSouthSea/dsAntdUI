import lazy from "@loadable/component"

import Layout from "@/layout"
// 异步加载组件
const App = lazy(() => import("@/App"))
const Slogan = lazy(() => import("@/pages/Slogan"))
const RerenderBase = lazy(() => import("@/pages/best/RerenderBase"))
const RerenderBase1 = lazy(() => import("@/pages/best/RerenderBase1"))
const GrandParentChild = lazy(() => import("@/pages/best/GrandParentChild"))
const GrandParentChildOptimize = lazy(() => import("@/pages/best/GrandParentChildOptimize"))
const GrandParentChildOptimizeFix = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix"))
const GrandParentChildOptimizeFix1 = lazy(() => import("@/pages/best/GrandParentChildOptimizeFix1"))
const GrandParentChildOptimize1 = lazy(() => import("@/pages/best/GrandParentChildOptimize1"))
const GrandParentChildOptimize2 = lazy(() => import("@/pages/best/GrandParentChildOptimize2"))
const GrandParentChildOptimize3 = lazy(() => import("@/pages/best/GrandParentChildOptimize3"))
const BestDemo = lazy(() => import("@/pages/best/BestDemo"))
const DebounceDemo1 = lazy(() => import("@/best/debounce/demo1"))
const DebounceDemo2 = lazy(() => import("@/best/debounce/demo2"))
const DebounceDemo = lazy(() => import("@/best/debounce/demo"))
const ErrorBoundaryDemo = lazy(() => import("@/best/AsyncErrorBoundary/demo"))
const UseDebounceDemo = lazy(() => import("@/best/debounce/demo2"))
const CloneElementBase = lazy(() => import("@/pages/cloneElement/Base"))
const NoPropsChild = lazy(() => import("@/pages/rerender/NoPropsChild"))
const NoPropsChildFix = lazy(() => import("@/pages/rerender/NoPropsChildFix"))
const ListPage = lazy(() => import("@/pages/rerender/ListPage"))
const HooksBaseDemo = lazy(() => import("@/pages/best/hooks/BaseDemo"))
const IncludeClosure = lazy(() => import("@/pages/best/closure/IncludeClosure"))
const BaseClosure = lazy(() => import("@/pages/best/closure/BaseClosure"))
const RefClosure = lazy(() => import("@/pages/best/closure/RefClosure"))
const FixClosure = lazy(() => import("@/pages/best/closure/FixClosure"))
const FixClosure1 = lazy(() => import("@/pages/best/closure/FixClosure1"))
const BaseHoc = lazy(() => import("@/pages/best/hoc/BaseHoc"))
const EnhanceCallback = lazy(() => import("@/pages/best/hoc/App"))
const InterceptEvent = lazy(() => import("@/pages/best/hoc/InterceptEvent"))
const HocContextDemo = lazy(() => import("@/pages/best/hoc/HocContextDemo"))
const ConditionRender = lazy(() => import("@/pages/best/reconciliation/ConditionRender"))
const ConditionRenderFix = lazy(() => import("@/pages/best/reconciliation/ConditionRenderFix"))
const ConditionRenderArr = lazy(() => import("@/pages/best/reconciliation/ConditionRenderArr"))
const ConditionRenderSameKey = lazy(
  () => import("@/pages/best/reconciliation/ConditionRenderSameKey")
)
const ArrayOuterKey = lazy(() => import("@/pages/best/reconciliation/ArrayOuterKey"))
const ArrayOrderConditionKey = lazy(
  () => import("@/pages/best/reconciliation/ArrayOrderConditionKey")
)
const RenderCount = lazy(() => import("@/pages/best/reconciliation/RenderCount"))
const ChildrenBaseDemo = lazy(() => import("@/pages/best/children/BaseDemo"))
const BaseDemoMemoFix = lazy(() => import("@/pages/best/children/BaseDemoMemoFix"))
const BaseDemoChildrenFix = lazy(() => import("@/pages/best/children/BaseDemoChildrenFix"))
const MemoChildrenComp = lazy(() => import("@/pages/best/children/MemoChildrenComp"))
const MemoRenderProps = lazy(() => import("@/pages/best/children/MemoRenderProps"))
const ErrorStepOne = lazy(() => import("@/pages/best/error/ErrorStepOne"))
const ErrorStepTwo = lazy(() => import("@/pages/best/error/ErrorStepTwo"))
const ErrorStepThree = lazy(() => import("@/pages/best/error/ErrorStepThree"))
const ErrorStepFour = lazy(() => import("@/pages/best/error/ErrorStepFour"))
const ErrorStepFive = lazy(() => import("@/pages/best/error/ErrorStepFive"))
const ErrorStepSix = lazy(() => import("@/pages/best/error/ErrorStepSix"))
const ErrorStepSeven = lazy(() => import("@/pages/best/error/ErrorStepSeven"))
const ErrorStepEight = lazy(() => import("@/pages/best/error/ErrorStepEight"))
const PropsStepTwo = lazy(() => import("@/pages/best/props/PropsStepTwo"))
const PropsStepThree = lazy(() => import("@/pages/best/props/PropsStepThree"))
const PropsStepFour = lazy(() => import("@/pages/best/props/PropsStepFour"))
const SplitCompOne = lazy(() => import("@/pages/best/splitComp/SplitCompOne"))
const SplitCompTwo = lazy(() => import("@/pages/best/splitComp/SplitCompTwo"))
const SplitCompThree = lazy(() => import("@/pages/best/splitComp/SplitCompThree"))
const SplitCompFour = lazy(() => import("@/pages/best/splitComp/SplitCompFour"))
const ArrayStepOne = lazy(() => import("@/pages/best/performance/ArrayStepOne"))
const ArrayStepTwo = lazy(() => import("@/pages/best/performance/ArrayStepTwo"))
const ContextStepOne = lazy(() => import("@/pages/best/performance/ContextStepOne"))
const ContextStepTwo = lazy(() => import("@/pages/best/performance/ContextStepTwo"))
const StateMovedDown = lazy(() => import("@/pages/best/performance/StateMovedDown"))
const ChildrenMemoComp = lazy(() => import("@/pages/best/performance/ChildrenMemoComp"))
const PropsMemoComp = lazy(() => import("@/pages/best/performance/PropsMemoComp"))
const MemoChildren = lazy(() => import("@/pages/best/performance/MemoChildren"))
const BaseForm = lazy(() => import("@/pages/base/form/ClassForm/Demo"))
const BadModalDemo = lazy(() => import("@/pages/base/modal/BadModalDemo"))
const BadModalDemoFix = lazy(() => import("@/pages/base/modal/BadModalDemoFix"))
const MessageDemo = lazy(() => import("@/pages/base/message/MessageDemo"))
const BasicListExample = lazy(() => import("@/pages/business/list/ListPage"))

export const routerObj = [
  {
    path: "/*",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "slogan", element: <Slogan /> },
      {
        path: "best/*",
        children: [
          { index: true, element: <RerenderBase /> },
          { path: "rerederbase", element: <RerenderBase /> },
          { path: "rerederbase1", element: <RerenderBase1 /> },
          { path: "grandparentchild", element: <GrandParentChild /> },
          { path: "grandparentchildoptimize", element: <GrandParentChildOptimize /> },
          { path: "grandparentchildoptimizefix", element: <GrandParentChildOptimizeFix /> },
          { path: "grandparentchildoptimizefix1", element: <GrandParentChildOptimizeFix1 /> },
          { path: "grandparentchildoptimize1", element: <GrandParentChildOptimize1 /> },
          { path: "grandparentchildoptimize2", element: <GrandParentChildOptimize2 /> },
          { path: "grandparentchildoptimize3", element: <GrandParentChildOptimize3 /> },
          {
            path: "debounce/*",
            children: [
              { index: true, element: <DebounceDemo2 /> },
              { path: "demo", element: <DebounceDemo /> },
              { path: "demo1", element: <DebounceDemo1 /> },
              { path: "demo2", element: <DebounceDemo2 /> },
            ],
          },
          { path: "bestdemo", element: <BestDemo /> },
          { path: "errorboundary", element: <ErrorBoundaryDemo /> },
          { path: "useDebounce", element: <UseDebounceDemo /> },
          { path: "useDebounce", element: <UseDebounceDemo /> },
        ],
      },
      {
        path: "cloneElement/*",
        children: [
          { index: true, element: <CloneElementBase /> },
          { path: "base", element: <CloneElementBase /> },
        ],
      },
      {
        path: "rerender/*",
        children: [
          { index: true, element: <NoPropsChild /> },
          { path: "nopropschild", element: <NoPropsChild /> },
          { path: "nopropschildfix", element: <NoPropsChildFix /> },
          { path: "listpage", element: <ListPage /> },
        ],
      },
      {
        path: "hooks/*",
        children: [
          { index: true, element: <HooksBaseDemo /> },
          { path: "basedemo", element: <HooksBaseDemo /> },
        ],
      },
      {
        path: "closure/*",
        children: [
          { index: true, element: <IncludeClosure /> },
          { path: "includeclose", element: <IncludeClosure /> },
          { path: "baseclosure", element: <BaseClosure /> },
          { path: "refclosure", element: <RefClosure /> },
          { path: "fixclosure", element: <FixClosure /> },
          { path: "fixclosure1", element: <FixClosure1 /> },
        ],
      },
      {
        path: "hoc/*",
        children: [
          { index: true, element: <BaseHoc /> },
          { path: "basehoc", element: <BaseHoc /> },
          { path: "enhancecallback", element: <EnhanceCallback /> },
          { path: "interceptevent", element: <InterceptEvent /> },
          { path: "hoccontext", element: <HocContextDemo /> },
        ],
      },
      {
        path: "render/*",
        children: [
          { index: true, element: <ConditionRender /> },
          { path: "conditionrender", element: <ConditionRender /> },
          { path: "conditionrenderfix", element: <ConditionRenderFix /> },
          { path: "conditionrenderarr", element: <ConditionRenderArr /> },
          { path: "conditionrendersamekey", element: <ConditionRenderSameKey /> },
          { path: "arrayouterkey", element: <ArrayOuterKey /> },
          { path: "arrayorderconditionkey", element: <ArrayOrderConditionKey /> },
          { path: "rendercount", element: <RenderCount /> },
        ],
      },
      {
        path: "children/*",
        children: [
          { index: true, element: <ChildrenBaseDemo /> },
          { path: "basedemo", element: <ChildrenBaseDemo /> },
          { path: "basedemomemofix", element: <BaseDemoMemoFix /> },
          { path: "basedemochildrenfix", element: <BaseDemoChildrenFix /> },
          { path: "memochildrencomp", element: <MemoChildrenComp /> },
          { path: "memorenderprops", element: <MemoRenderProps /> },
        ],
      },
      {
        path: "error/*",
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
      },
      {
        path: "props/*",
        children: [
          { index: true, element: <PropsStepTwo /> },
          { path: "steptwo", element: <PropsStepTwo /> },
          { path: "stepthree", element: <PropsStepThree /> },
          { path: "stepfour", element: <PropsStepFour /> },
        ],
      },
      {
        path: "splitComp/*",
        children: [
          { index: true, element: <SplitCompOne /> },
          { path: "stepone", element: <SplitCompOne /> },
          { path: "steptwo", element: <SplitCompTwo /> },
          { path: "stepthree", element: <SplitCompThree /> },
          { path: "stepfour", element: <SplitCompFour /> },
        ],
      },
      {
        path: "performance/*",
        children: [
          { index: true, element: <ArrayStepOne /> },
          { path: "arraystepone", element: <ArrayStepOne /> },
          { path: "arraysteptwo", element: <ArrayStepTwo /> },
          { path: "contextstepone", element: <ContextStepOne /> },
          { path: "contextsteptwo", element: <ContextStepTwo /> },
          { path: "statemoveddown", element: <StateMovedDown /> },
          { path: "childrenmemocomp", element: <ChildrenMemoComp /> },
          { path: "propsmemocomp", element: <PropsMemoComp /> },
          { path: "memochildren", element: <MemoChildren /> },
        ],
      },
      {
        path: "comp/*",
        children: [
          { index: true, element: <SplitCompOne /> },
          { path: "form", element: <BaseForm /> },
          { path: "badmodaldemo", element: <BadModalDemo /> },
          { path: "badmodaldemofix", element: <BadModalDemoFix /> },
          { path: "messagedemo", element: <MessageDemo /> },
          { path: "listdemo", element: <BasicListExample /> },
        ],
      },
    ],
  },
]
