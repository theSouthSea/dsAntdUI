import { Input } from "antd"
import { toJS } from "mobx"
import { observer } from "mobx-react-lite"

import store, { Todo } from "../todoStore"
import GridRow from "./GridRow"

const TodoView = observer(({ todo }: { todo: Todo }) => {
  const handleChange = (e: any) => {
    todo.title = e.target.value
  }
  return (
    <>
      <hr />
      <div>TodoView</div>
      <Input value={todo.title} onChange={handleChange}></Input>
      {/* 错误: GridRow 不能获取到 todo.title/ todo.done 的变更因为他不是一个观察者observer。 */}
      <GridRow data={todo} />
      {/* 正确:在 `TodoView` 中显式的声明相关的`todo` ，到data中。 */}
      {/* <GridRow
        data={{
          title: todo.title,
          done: todo.done,
        }}
      /> */}
      {/* 正确: 使用 `toJS`也是可以的, 并且是更清晰直白的方式。 */}
      {/* <GridRow data={toJS(todo)} /> */}
    </>
  )

  // 正确:在 `TodoView` 中显式的声明相关的`todo` ，到data中。
  return (
    <GridRow
      data={{
        title: todo.title,
        done: todo.done,
      }}
    />
  )

  // 正确: 使用 `toJS`也是可以的, 并且是更清晰直白的方式。
  return <GridRow data={toJS(todo)} />
})
const App = () => {
  const handleChange = (e: any) => {
    store.title = e.target.value
  }
  return (
    <>
      <h2>App</h2>
      <Input value={store.title} onChange={handleChange}></Input>
      <TodoView todo={store} />
    </>
  )
}
// export default App
export default observer(App)
