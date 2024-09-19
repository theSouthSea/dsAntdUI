import "./index.less"

const CustomCheckbox = () => {
  return (
    <>
      <div>CustomCheckbox</div>
      <div>
        <input type="checkbox" id="knowledge" name="examDirection" value="knowledge" />
        <label htmlFor="knowledge">定义理解</label>
      </div>
      <div>
        <input type="checkbox" name="examDirection" id="distinguish" value="distinguish" />
        <label htmlFor="distinguish">概念辨析</label>
      </div>
      <div>
        <input type="checkbox" name="examDirection" id="application" value="application" />
        <label htmlFor="application">场景应用</label>
      </div>
      <fieldset>
        <legend>Choose your monster's features:</legend>
        <div>
          <input type="checkbox" id="scales" name="scales" checked />
          <label htmlFor="scales">Scales</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">Horns</label>
        </div>
      </fieldset>
    </>
  )
}
export default CustomCheckbox
