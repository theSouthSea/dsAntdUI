import { useState } from "react"

export const CollapsableSection = ({ children, title }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="sidebar-section">
      <div className="sidebar-section-title" onClick={() => setIsCollapsed(!isCollapsed)}>
        {title}
      </div>

      {!isCollapsed && <>{children}</>}
    </div>
  )
}
