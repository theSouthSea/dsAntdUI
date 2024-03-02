import "./styles.css"

import { ReactNode } from "react"

import { Issue } from "../SplitCompTwo/Issue"
import { Topbar } from "../SplitCompTwo/TapbarSplitFinal"
import { Sidebar } from "./Sidebar"

const JiraPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  )
}

const JiraIssuePage = () => {
  return (
    <JiraPageLayout>
      <Issue />
    </JiraPageLayout>
  )
}
export default JiraIssuePage
