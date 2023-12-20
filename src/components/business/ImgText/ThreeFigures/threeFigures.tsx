import { ImgTextProps } from '..'
import TwoFigures from '../TwoFigures/twoFigures'

function ThreeFigures(props: ImgTextProps) {
  return <TwoFigures {...props} type={3} />
}

export default ThreeFigures
