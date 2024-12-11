import { observer } from "mobx-react-lite"
/* 不显示组件名 */
// const MyComponent = observer((props) => <div>hi</div>)
// export default MyComponent

/* 显示组件名 */
// const MyComponent = observer(function MyComponentInner() {
//   return <div>hi</div>
// })
// export default MyComponent

/* 显示组件名:_MyComponent */
const _MyComponent = (props) => <div>hi</div>
// export const MyComponent = observer(_MyComponent)
// export default MyComponent
export default observer(_MyComponent)

/* 显示组件名:_MyComponent */
// const _MyComponent = (props) => <div>hi</div>
// const MyComponent = observer(_MyComponent)
// const App = () => {
//   return <MyComponent />
// }
// export default App

/* [破坏性方法] 显式的声明 displayName： */
// 这种写法在React 16是有问题的， mobx-react observer 使用 React.memo 会出现这个 bug: https://github.com/facebook/react/issues/18026, 但是在 React 17 会被修复。
// const MyComponent = observer((props) => <div>hi</div>)
// MyComponent.displayName = "MyComponent"
// export default MyComponent
