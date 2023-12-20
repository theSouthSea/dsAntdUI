import { Meta, StoryObj } from "@storybook/react"
import { useDebounce } from "./useDebounce"
import { useState } from "react"
import { debounce } from "lodash-es"
import { sleep } from "@/utils"
import { Radio, RadioChangeEvent } from "antd"
const UsedDemo = () => {
  const [keyword, setKeyWord] = useState("")
  const [data, setData] = useState<any[]>([])
  const handleRequestClick = async () => {
    console.log("请求成功")
    await sleep(1000)
    setData([
      {
        title: "react " + keyword,
        description: "react description",
        url: "/react.html",
      },
      {
        title: "vue " + keyword,
        description: "vue description",
        url: "/vue.html",
      },
      {
        title: "angular " + keyword,
        description: "angular description",
        url: "/angular.html",
      },
    ])
  }
  const debounceRequest = useDebounce(handleRequestClick, 500)
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value)
    debounceRequest()
  }
  return (
    <>
      <p>搜索-使用useDebounce防抖</p>
      <input type="text" value={keyword} onChange={handleValueChange} />
      <p>搜索结果</p>
      <ol>
        {data.map((item) => (
          <li key={item.url}>{item.title}</li>
        ))}
      </ol>
    </>
  )
}
const UnusedDemo = () => {
  const [keyword, setKeyWord] = useState("")
  const [data, setData] = useState<any[]>([])
  const handleRequestClick = async () => {
    console.log("请求成功")
    await sleep(1000)
    setData([
      {
        title: "react " + keyword,
        description: "react description",
        url: "/react.html",
      },
      {
        title: "vue " + keyword,
        description: "vue description",
        url: "/vue.html",
      },
      {
        title: "angular " + keyword,
        description: "angular description",
        url: "/angular.html",
      },
    ])
  }
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value)
    handleRequestClick()
  }
  return (
    <>
      <p>搜索-不使用防抖</p>
      <input type="text" value={keyword} onChange={handleValueChange} />
      <p>搜索结果</p>
      <ol>
        {data.map((item) => (
          <li key={item.url}>{item.title}</li>
        ))}
      </ol>
    </>
  )
}
const DebounceDemo = () => {
  const [keyword, setKeyWord] = useState("")
  const [data, setData] = useState<any[]>([])
  const handleRequestClick = async () => {
    console.log("请求成功")
    await sleep(1000)
    setData([
      {
        title: "react " + keyword,
        description: "react description",
        url: "/react.html",
      },
      {
        title: "vue " + keyword,
        description: "vue description",
        url: "/vue.html",
      },
      {
        title: "angular " + keyword,
        description: "angular description",
        url: "/angular.html",
      },
    ])
  }
  const handleValueChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value)
    handleRequestClick()
  }, 1000)
  return (
    <>
      <p>搜索-直接使用Debounce防抖</p>
      <input type="text" value={keyword} onChange={handleValueChange} />
      <p>搜索结果</p>
      <ol>
        {data.map((item) => (
          <li key={item.url}>{item.title}</li>
        ))}
      </ol>
    </>
  )
}
type DebounceType = "useDebounce" | "debounce" | "none"
interface IProps {
  // 类型
  type: DebounceType
}
const Demo = ({ type }: IProps) => {
  const [debounceType, setDebounceType] = useState<DebounceType>(type)

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value)
    setDebounceType(e.target.value)
  }
  return (
    <>
      <Radio.Group onChange={onChange} value={debounceType}>
        <Radio value="useDebounce">使用useDebounce防抖</Radio>
        <Radio value="none">不使用防抖</Radio>
        <Radio value="debounce">使用debounce防抖</Radio>
      </Radio.Group>
      {debounceType === "useDebounce" && <UsedDemo />}
      {debounceType === "none" && <UnusedDemo />}
      {debounceType === "debounce" && <DebounceDemo />}
    </>
  )
}
const meta: Meta = {
  title: "hooks/useDebounce",
  component: Demo,
  argTypes: {
    type: { control: "radio", options: ["useDebounce", "debounce", "none"] },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Demo>

export default meta

type Story = StoryObj<typeof meta>
export const UsedUseDebounce: Story = {
  args: {
    type: "useDebounce",
  },
}
export const NoUsedDebounce: Story = {
  args: {
    type: "none",
  },
}
export const UsedDebounce: Story = {
  args: {
    type: "debounce",
  },
}
