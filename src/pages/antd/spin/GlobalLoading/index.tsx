import { Alert, Button, Flex, Spin } from "antd"
import React, { useState } from "react"

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
}

const content = <div style={contentStyle} />
const getServerData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000)
  })
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const handleRequest = async () => {
    setLoading(true)
    await getServerData()
    setLoading(false)
  }
  return (
    <Flex gap="middle" vertical>
      <Flex gap="middle">
        <Spin tip="Loading" size="small">
          {content}
        </Spin>
        <Spin tip="Loading">{content}</Spin>
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      </Flex>
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
      <Spin tip="Loading..." spinning={loading} fullscreen></Spin>
      {/* <div style={{ transform: "translate(200px,0)" }}>
        <Spin tip="Loading..." spinning={true} fullscreen></Spin>
      </div> */}
      <Button type="primary" onClick={handleRequest}>
        请求数据
      </Button>
    </Flex>
  )
}

export default App
