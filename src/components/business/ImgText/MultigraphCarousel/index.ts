// export { default } from './multigraphCarouselWithData';
export { default } from './multigraphCarousel'

export interface ICrouselItem {
  altLabel: string
  id?: string
  imgName: string
  imgSort: number
  imgUrl: string
  linkAddress: string
  linkFlag: boolean
  templateId: string
  videoPlaybackMode?: number
  productText: ProductText[]
}
export interface ProductText {
  description: string
  id?: string
  position: number
  positionLeft: string
  positionTop: string
  templateImageId?: string
}
