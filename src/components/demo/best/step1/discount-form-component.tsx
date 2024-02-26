/** @jsxImportSource @emotion/react */

import React from "react"
import { DraggingBar } from "@/libs/best/dragging-bar-library"

export const DiscountFormComponent = ({
  onDiscountChange,
}: {
  onDiscountChange: (value: number) => void
}) => {
  console.info("DiscountFormComponent render")
  return (
    <div>
      Please select your discount here: <br />
      <DraggingBar onChange={(value: number) => onDiscountChange(value)} />
    </div>
  )
}
