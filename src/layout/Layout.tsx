import { Outlet } from "react-router-dom"
import { Body, Footer, Header, Main, PageContainer, SideBar } from "./styled"
interface LayoutProps {
  header?: React.ReactNode
  // children: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
}
const Layout = ({ header, sidebar, footer }: LayoutProps) => {
  return (
    <PageContainer>
      <Header>{header}</Header>
      <Body>
        <Main>
          <Outlet></Outlet>
        </Main>
        {sidebar && <SideBar>{sidebar}</SideBar>}
      </Body>
      <Footer>{footer}</Footer>
    </PageContainer>
  )
}
export default Layout
