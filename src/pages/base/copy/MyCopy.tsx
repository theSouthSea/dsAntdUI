import CopyToClipboard from "@/components/base/Copy"

const MyCopy = () => {
  return (
    <CopyToClipboard text="好好学习天天向上" onCopy={() => console.log("done")}>
      <button onClick={() => alert("复制成功")}>复制</button>
    </CopyToClipboard>
  )
}
export default MyCopy
