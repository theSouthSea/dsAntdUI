import RainingSvg from "@/assets/svg/weather/小雨.svg?react"
import SunnySvg from "@/assets/svg/weather/晴天.svg?react"

const ViewBox = () => {
  return (
    <div>
      <SunnySvg></SunnySvg>
      <section>
        <p>默认大小: 200*200</p>
        <RainingSvg></RainingSvg>
      </section>
      <section>
        <p>设置width="300" height="300"</p>
        <RainingSvg width="300" height="300"></RainingSvg>
      </section>
      <section>
        <p>设置style="width: 20px; height: 20px;"</p>
        <RainingSvg style={{ width: 20, height: 20 }}></RainingSvg>
      </section>
      <section>
        <p>通过viewBox放大,变成300*300</p>
        <RainingSvg viewBox="0 0 600 600" width="300" height="300"></RainingSvg>
      </section>
      <section>
        <p>通过viewBox缩小,变成20*20</p>
        <RainingSvg viewBox="0 0 1024 1024" style={{ width: 20, height: 20 }}></RainingSvg>
      </section>
    </div>
  )
}
export default ViewBox
