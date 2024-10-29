interface CheckboxProps {
  label: string
  value: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Checkbox = (props: CheckboxProps) => {
  const { label, value, checked, onChange } = props
  return (
    <label>
      <input type="checkbox" value={value} onChange={onChange} checked={checked} />
      {label}
    </label>
  )
}
export default Checkbox
