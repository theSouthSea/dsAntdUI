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
