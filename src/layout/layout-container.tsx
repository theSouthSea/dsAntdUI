import styled from "@emotion/styled"
import { Layout } from "antd"
import React, { useState } from "react"

import { ErrorBoundary } from "@/components/base/AsyncErorrBoundary"

import TagsView from "./tagView"

const { Header, Footer, Sider, Content } = Layout
interface ModalProps {
  siderSlot?: React.ReactNode
  headerSlot?: React.ReactNode
  contentSlot?: React.ReactNode
  footerSlot?: React.ReactNode
}
const LayOutContainer: React.FC<ModalProps> = (props) => {
  const { siderSlot, headerSlot, contentSlot, footerSlot } = props
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      {/* <Sider
        collapsible
        style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {siderSlot}
      </Sider> */}
      <FixedSiderScrollHeight
        collapsible
        style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {siderSlot}
      </FixedSiderScrollHeight>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={headerStyle}>{headerSlot}</Header>
        <TagsView />
        <Content style={contentStyle}>
          <ErrorBoundary fallback={<div>当前页面出错了,你可以切换其他页面正常浏览</div>}>
            {contentSlot}
          </ErrorBoundary>
        </Content>
        {/* <Footer style={footerStyle}>{footerSlot}</Footer> */}
      </Layout>
    </Layout>
  )
}

export default LayOutContainer
const FixedSiderScrollHeight = styled(Sider)`
  .ant-menu-root {
    height: 100%;
    overflow-y: auto;
  }
`
const headerStyle: React.CSSProperties = {
  // textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#333",
  height: 64,
  paddingInline: 15,
  lineHeight: "64px",
  backgroundColor: "#fff",
  boxShadow: "0 4px 4px rgb(0 21 41 / 8%)",
  // boxShadow: "0 4px 4px #333",
  position: "relative",
  zIndex: 10,
  // backgroundColor: "#7dbcea",
}

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "normal",
  color: "#666",
  // backgroundColor: "#108ee9",
  backgroundColor: "#fff",
  padding: 10,
}

// const siderStyle: React.CSSProperties = {
//   textAlign: 'center',
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
// };

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
}
