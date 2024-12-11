const GridRow = ({ onRender }) => {
  console.log("GridRow-data-onRender=")
  return (
    <>
      <div>GridRow</div>
      {onRender?.()}
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
    </>
  )
}
export default GridRow
