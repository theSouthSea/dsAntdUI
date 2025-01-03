import { useState } from "react"

import Background from "./components/Background.js"
import Box from "./components/Box.js"

const initialPosition = {
  x: 0,
  y: 0,
}

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  })

  function handleMove(dx, dy) {
    /* bug code */
    // shape.position.x += dx
    // shape.position.y += dy
    /* fix code */
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    })
  }
  console.log("Canvas-shape=", shape)
  function handleColorChange(e) {
    console.log("handleColorChange-shape=", shape)
    setShape({
      ...shape,
      color: e.target.value,
    })
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  )
}
