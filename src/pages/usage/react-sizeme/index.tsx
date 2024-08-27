import { SizeMe } from "react-sizeme"

function MyApp() {
  return <SizeMe>{({ size }) => <div>My width is {size.width}px</div>}</SizeMe>
}
export default MyApp
