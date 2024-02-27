import { ChangeEvent } from "react"

import { useFormAPI, useFormName } from "@/pages/best/FormDataProvider"

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
  console.info("NameFormComponent render")
  // accessing the data directly right where it's needed!
  // const { name } = useFormData()
  const name = useFormName()
  const { onNameChange } = useFormAPI()

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value)
  }

  return (
    <div>
      Type your name here: <br />
      <input onChange={onValueChange} value={name} />
    </div>
  )
}
