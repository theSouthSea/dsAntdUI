import Child from "./Child"

const CombineControlledOpt3 = () => {
  const handleChange = (value: string) => {
    console.log("value", value)
  }
  return (
    <>
      <div>CombineControlledOpt3</div>
      <Child defaultValue="南海指南" onChange={handleChange}></Child>
    </>
  )
}
export default CombineControlledOpt3
