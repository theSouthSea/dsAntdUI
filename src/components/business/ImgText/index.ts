import type { FormInstance } from '@ui'
import GraphicTextIntegration from './GraphicTextIntegration'
import FontFamilyColorSize from './FontFamilyColorSize/fontFamilyColorSize'
import TwoFigures from './TwoFigures/twoFigures'
import LeftFigures from './LeftFigures'
import ThreeFigures from './ThreeFigures'
import RightFigures from './RightFigures'
import MultigraphCarousel from './MultigraphCarousel'
import VideoModule from './VideoModule'
import FigureTextCarouselFill from './FigureTextCarouselFill'
import FigureTextCarouselTile from './FigureTextCarouselTile'
import SelectModuleDialog from './SelectModuleDialog'
import RichText from './RichText'
import AllRichText from './AllRichText'
import AllLeftFigures from './AllLeftFigures'
import AllRightFigures from './AllRightFigures'
import ProductCarousel from './ProductCarousel'
import ProductListTwo from './ProductListTwo'
import CategoryName from './CategoryName'
import type { HiddenBtn } from './OperationButton'
import type { ImgTextForm } from '@/utils/commodityManage'

export type ImgTextProps = {
  sort: number
  size: number
  name?: (string | number) | (string | number)[]
  onOperate: (type: HiddenBtn, idx: number) => void
  deviceType?: string
  /** 应用类型 */
  applyType?: ImgTextForm
  // 表单form实例
  form?: FormInstance<any>
}
export type NameType = (string | number)[]
export type { ICrouselItem } from './MultigraphCarousel'
export type { SelectedModuleItem } from './SelectModuleDialog'
export type { ShowBtn, HiddenBtn } from './OperationButton'
export {
  RichText,
  GraphicTextIntegration,
  FontFamilyColorSize,
  TwoFigures,
  ThreeFigures,
  LeftFigures,
  RightFigures,
  MultigraphCarousel,
  VideoModule,
  FigureTextCarouselFill,
  FigureTextCarouselTile,
  SelectModuleDialog,
  AllRichText,
  AllLeftFigures,
  AllRightFigures,
  ProductCarousel,
  ProductListTwo,
  CategoryName,
}
