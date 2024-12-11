import Section from "@business/Section"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"

import todosStore from "../todosStore"
import DataDisplay from "./DataDisplay"
import Todos from "./Todos"

const HOCMobx = () => {
  useEffect(() => {
    todosStore.fetchTodos()
  }, [])
  return (
    <>
      <div>HOCMobx</div>
      <DataDisplay data={todosStore.todos}></DataDisplay>
      <Section title="全部待办事项">
        <Todos data={todosStore.todos}></Todos>
      </Section>
    </>
  )
}
export default observer(HOCMobx)
