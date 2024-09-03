import copy from "copy-to-clipboard"

const MyCopy = () => {
  function onClick() {
    const res = copy("神说要有光666")
    console.log("done", res)
  }
  return <button onClick={onClick}>复制</button>
}
export default MyCopy
