import { useFormContext } from "./HocContext"

export const Name = () => {
  // using name and changing it here
  const { name, setName } = useFormContext()

  return <input onChange={(event) => setName(event.target.value)} value={name} />
}
