import "./style.css"

import React, { useState } from "react"
import { animated as a, useSpring } from "react-spring"
/* react性能优化 10、动画库直接修改 DOM 属性 */
let renderCnt = 0
export function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  // 尽管 opacity 和 transform 的值在动画期间一直变化
  // 但是并没有组件的重新 Render
  return (
    <div onClick={() => set((state) => !state)}>
      <div style={{ position: "relative", top: 10, left: 10 }}>Render 次数：{++renderCnt}</div>
      <a.div className="c back" style={{ opacity: opacity.interpolate((o) => 1 - o), transform }} />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  )
}

export default Card
