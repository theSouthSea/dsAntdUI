import React from "react"
import { Section } from "./section"
import { useFormState } from "@/pages/best/FormDataProvider"

// export const ActionsSection = ({ onSave }: { onSave: () => void }) => {
//   console.info("ActionsSection render");
//   return (
//     <Section title="Actions">
//       <button onClick={onSave}>Save form</button>
//     </Section>
//   );
// };
export const ActionsSection = () => {
  const { onSave } = useFormState()
  console.info("ActionsSection render")
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  )
}
