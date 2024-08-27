import { withSize } from "react-sizeme"

function MyComponent({ size }) {
  return <div>My width is {size.width}px</div>
}

export default withSize()(MyComponent)
