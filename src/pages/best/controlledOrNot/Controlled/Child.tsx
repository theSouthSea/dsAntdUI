interface ChildProps {
  value: string
  onChange: (e: any) => void
}
const Child = (props: ChildProps) => {
  const { value, onChange } = props
  return <input type="text" value={value} onChange={onChange} />
}
export default Child
