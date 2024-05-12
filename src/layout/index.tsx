import { Outlet } from "react-router-dom"

import LayOutContainer from "@/layout/layout-container"

import Footer from "./Footer"
import Header from "./Header"
import Menu from "./menu"

const Index = () => {
  return (
    <LayOutContainer
      headerSlot={<Header />}
      siderSlot={<Menu />}
      contentSlot={<Outlet />}
      footerSlot={<Footer />}
    ></LayOutContainer>
  )
}
export default Index
