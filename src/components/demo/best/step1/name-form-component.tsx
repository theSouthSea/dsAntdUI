import { useFormState } from "@/pages/best/FormDataProvider"
import React, { ChangeEvent } from "react"

// export const NameFormComponent = ({
//   onChange,
//   name
// }: {
//   onChange: (val: string) => void;
//   name: string;
// }) => {
//   console.info("NameFormComponent render");

//   const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };

//   return (
//     <div>
//       Type your name here: <br />
//       <input onChange={onValueChange} value={name} />
//     </div>
//   );
// };
export const NameFormComponent = () => {
  // accessing the data directly right where it's needed!
  const { onNameChange, state } = useFormState()

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value)
  }

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={state.name} />
    </div>
  )
}
