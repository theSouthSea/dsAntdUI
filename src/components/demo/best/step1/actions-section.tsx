import { useFormAPI } from "@/pages/best/FormDataProvider"

import { Section } from "./section"

// export const ActionsSection = ({ onSave }: { onSave: () => void }) => {
//   console.info("ActionsSection render");
//   return (
//     <Section title="Actions">
//       <button onClick={onSave}>Save form</button>
//     </Section>
//   );
// };
export const ActionsSection = () => {
  const { onSave } = useFormAPI()
  console.info("ActionsSection render")
  return (
    <Section title="Actions">
      <button onClick={onSave}>Save form</button>
    </Section>
  )
}
