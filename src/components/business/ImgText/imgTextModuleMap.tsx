import {
  RichText,
  GraphicTextIntegration,
  TwoFigures,
  ThreeFigures,
  LeftFigures,
  RightFigures,
  MultigraphCarousel,
  VideoModule,
  FigureTextCarouselFill,
  FigureTextCarouselTile,
  AllRichText,
  AllLeftFigures,
  AllRightFigures,
  ProductCarousel,
  ProductListTwo,
  CategoryName,
} from '.'

export const ProductModuleCompMap = {
  model1: RichText, // 富文本组件
  model2: GraphicTextIntegration, // 图文一体组件
  model3: TwoFigures, // 双图-上图下文组件
  model4: ThreeFigures, // 三图-上图下文组件
  model5: LeftFigures, // 左图右文组件
  model6: RightFigures, // 右图左文组件
  model7: MultigraphCarousel, // 多图轮播组件
  model8: VideoModule, // 视频组件
  PLAIN_TEXT: AllRichText, // 新版分类富文本组件
  LEFT_PICTURE_RIGHT_TEXT: AllLeftFigures, // 新版分类左图右文
  LEFT_TEXT_RIGHT_PICTURE: AllRightFigures, // 新版分类左文右图
  PRODUCT_CAROUSEL: ProductCarousel, // 新版分类轮播
  TWO_PRODUCT: ProductListTwo, // 新版分类双列商品
  CATEGORY_NAME: CategoryName, // 新版分类分类名称
}
export const ModuleCompMap = {
  ...ProductModuleCompMap,
  model9: FigureTextCarouselFill, // 图文分离填充式
  model10: FigureTextCarouselTile, // 图文分离平铺式
}
export type ModuleTypes = keyof typeof ModuleCompMap
