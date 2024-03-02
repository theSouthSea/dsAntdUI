import { useState } from "react"

import { ModalDialog } from "./ModalDialog"

export const AddShortcutItem = () => {
  const [showAddShortcuts, setShowAddShortcuts] = useState(false)

  return (
    <>
      <span onClick={() => setShowAddShortcuts(true)}>Add shortcuts</span>
      {showAddShortcuts && <ModalDialog onClose={() => setShowAddShortcuts(false)} />}
    </>
  )
}
