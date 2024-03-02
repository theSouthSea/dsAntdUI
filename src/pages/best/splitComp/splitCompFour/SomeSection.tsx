import { useState } from "react"

import { ModalDialog } from "./ModalDialog"

export const SomeSection = () => {
  const [showAddShortcuts, setShowAddShortcuts] = useState(false)

  return (
    <div className="sidebar-section">
      <ul className="section-menu">
        <li>
          <span onClick={() => setShowAddShortcuts(true)}>Add shortcuts</span>
        </li>
      </ul>
      {showAddShortcuts && <ModalDialog onClose={() => setShowAddShortcuts(false)} />}
    </div>
  )
}
