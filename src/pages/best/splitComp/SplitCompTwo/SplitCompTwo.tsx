import "../styles.css"

import { Issue } from "./Issue"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./TapbarSplitFinal"

export const JiraIssuePage = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Issue />
        </div>
      </div>
    </div>
  )
}
