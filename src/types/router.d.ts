declare module SyncRoute {
  type Routes = {
    path?: string
    index?: boolean
    component?: React.LazyExoticComponent<any>
    element?: React.ReactNode
    children?: Routes[]
  }
}
