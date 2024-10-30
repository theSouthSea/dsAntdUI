/// <reference types="vite-plugin-svgr/client" />
// * global
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
  type RootState = ReturnType<typeof import("@/store").getState>
  declare module "vite-plugin-eslint"
}
// export {}

declare module "react-contenteditable"
declare module "sanitize-html"
// webpack，React将svg作为组件处理
// declare module "*.svg" {
//   import * as React from "react"

//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>
//   const content: string
//   export default content
// }
interface IOption {
  label: string
  value: string
}
interface IResponse<T> {
  code: number
  message: string
  data: T
}
