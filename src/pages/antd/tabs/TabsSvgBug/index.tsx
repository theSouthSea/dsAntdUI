import type { TabsProps } from "antd"
import { Tabs } from "antd"

import RainSvg from "@/assets/svg/weather/小雨.svg?react"
import SunnySvg from "@/assets/svg/weather/晴天.svg?react"

import Child1 from "../TabsCache/Child1"
import Child2 from "../TabsCache/Child2"
import Child3 from "../TabsCache/Child3"

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

const TabsSvgBug: React.FC = () => (
  <div>
    <Tabs destroyInactiveTabPane defaultActiveKey="1" items={items} onChange={onChange} />
    <div>
      <SunnySvg></SunnySvg>
    </div>
    <div>
      <RainSvg></RainSvg>
    </div>
  </div>
)

export default TabsSvgBug
