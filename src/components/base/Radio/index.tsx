const Radio = (props) => {
  const { data, value, onChange } = props
  return (
    <div>
      {data.map((ele) => (
        <span key={ele.id}>
          <input type="radio" checked={value === ele.value} onChange={onChange} value={ele.value} />
          <span>{ele.label}</span>
        </span>
      ))}
    </div>
  )
}
export default Radio
