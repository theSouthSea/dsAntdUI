const GridRow = ({ data, onRender }) => {
  console.log("GridRow-data=", data)
  return (
    <>
      <div>GridRow</div>
      {onRender?.()}
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  )
}
export default GridRow
