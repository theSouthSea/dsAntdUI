import BarPlot from "./BarPlot"
import data from "./data.json"

const D3Bar = () => {
  return (
    <>
      <div>D3Bar</div>
      {BarPlot(data)}
    </>
  )
}
export default D3Bar
