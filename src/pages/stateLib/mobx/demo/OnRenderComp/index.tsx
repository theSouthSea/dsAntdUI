import { Input } from "antd"
import { Observer, observer } from "mobx-react-lite"

import store, { Todo } from "../todoStore"
import GridRow from "./GridRow"

const TodoView = observer(({ todo }: { todo: Todo }) => {
  // 错误: GridRow.onRender 不能获得 todo.title / todo.done 中的改变
  //        因为它不是一个观察者（observer） 。
  // return <GridRow onRender={() => <td>{todo.title}</td>} />

  // 正确: 将回调组件通过Observer包裹将会正确的获得变化。
  return <GridRow onRender={() => <Observer>{() => <td>{todo.title}</td>}</Observer>} />
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
