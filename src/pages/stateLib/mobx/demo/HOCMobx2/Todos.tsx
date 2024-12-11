const Todos = (props) => {
  const { data } = props
  // 响应式数组转变成非响应式数组
  console.log("Todos-data.slice()=", data.slice())
  // 响应式对象转变成非响应式对象
  console.log("Todos-data.toJSON()=", data.toJSON())
  return <div>Todos</div>
}
export default Todos
