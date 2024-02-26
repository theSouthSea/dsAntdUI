export const NameFormComponent = ({
  onChange,
  name,
}: {
  onChange: (val: string) => void
  name: string
}) => {
  return (
    <div>
      Type your name here: <br />
      <input onChange={(e) => onChange(e.target.value)} value={name} />
    </div>
  )
}
