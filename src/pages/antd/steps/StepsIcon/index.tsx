import { UserOutlined } from "@ant-design/icons"
import { Button, message, Steps, theme } from "antd"
import React, { useState } from "react"

import Child1 from "../../tabs/TabsCache/Child1"
import Child2 from "../../tabs/TabsCache/Child2"
import Child3 from "../../tabs/TabsCache/Child3"

const steps = [
  {
    title: "First",
    content: <Child1 />,
    icon: <UserOutlined />,
  },
  {
    title: "Second",
    content: <Child2 />,
    icon: 2,
  },
  {
    title: "Last",
    content: <Child3 />,
  },
]

const App: React.FC = () => {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  }

  return (
    <>
      <Steps current={current} items={steps} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  )
}

export default App
