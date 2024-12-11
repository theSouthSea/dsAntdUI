import Section from "@business/Section"
import { Button, Input, Space } from "antd"
import { observer } from "mobx-react-lite"
import { useCallback, useEffect, useState } from "react"

import todosStore from "../todosStore"
import DataDisplay from "./DataDisplay"
import Todos from "./Todos"

const HOCMobx = () => {
  const [value, setValue] = useState("")
  useEffect(() => {
    todosStore.fetchTodos()
  }, [])
  console.log("HOCMobx-todosStore.todos=", todosStore.todos)
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  const handleAdd = () => {
    todosStore.addTodo(value)
    setValue("")
  }
  const handleSelect = (todo: any) => {
    // todosStore.toggleTodo(todo)
  }
  // const handleSelect = useCallback((todo: any) => {
  //   // todosStore.toggleTodo(todo)

  // },[])
  return (
    <>
      <div>HOCMobx</div>
      <DataDisplay data={todosStore.todos} onSelect={handleSelect}></DataDisplay>
      <Section title="全部待办事项">
        <Space.Compact style={{ width: "100%" }}>
          <Input value={value} onChange={handleChange}></Input>
          <Button type="primary" onClick={handleAdd}>
            添加待办事项
          </Button>
        </Space.Compact>
        <Todos data={todosStore.todos}></Todos>
      </Section>
    </>
  )
}
export default observer(HOCMobx)
