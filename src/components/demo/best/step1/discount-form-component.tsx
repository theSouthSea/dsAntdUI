/** @jsxImportSource @emotion/react */

import { DraggingBar } from "@/libs/best/dragging-bar-library"
import { useFormAPI } from "@/pages/best/FormDataProvider"

// export const DiscountFormComponent = ({
//   onDiscountChange,
// }: {
//   onDiscountChange: (value: number) => void
// }) => {
//   console.info("DiscountFormComponent render")
//   return (
//     <div>
//       Please select your discount here: <br />
//       <DraggingBar onChange={(value: number) => onDiscountChange(value)} />
//     </div>
//   )
// }
export const DiscountFormComponent = () => {
  const { onDiscountChange } = useFormAPI()
  console.info("DiscountFormComponent render")
  return (
    <div>
      Please select your discount here: <br />
      <DraggingBar onChange={(value: number) => onDiscountChange(value)} />
    </div>
  )
}
