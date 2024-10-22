import type { TabsProps } from "antd"
import { Tabs } from "antd"

import Child1 from "./Child1"
import Child2 from "./Child2"
import Child3 from "./Child3"

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: <Child1></Child1>,
  },
  {
    key: "2",
    label: "Tab 2",
    children: <Child2></Child2>,
  },
  {
    key: "3",
    label: "Tab 3",
    children: <Child3></Child3>,
  },
]

const App: React.FC = () => (
  <Tabs destroyInactiveTabPane defaultActiveKey="1" items={items} onChange={onChange} />
)

export default App
