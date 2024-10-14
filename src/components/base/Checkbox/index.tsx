const Checkbox = (props) => {
  const { data, value, onChange } = props
  const change = (ev) => {
    // 当勾选时，向value中追加一个选择；当取消勾选时，从value中删除一个选择。
    const val = ev.target.value
    const chd = ev.target.checked
    const newValue = chd ? [...value, val] : value.filter((ele) => ele !== val)
    // 把处理好的最新选择的结果，回传给父组件
    onChange({ target: { value: newValue } })
  }
  return (
    <div>
      {data.map((ele) => (
        <span key={ele.id}>
          <input
            type="checkbox"
            checked={value.includes(ele.value)}
            onChange={change}
            value={ele.value}
          />
          <span>{ele.label}</span>
        </span>
      ))}
    </div>
  )
}
export default Checkbox
