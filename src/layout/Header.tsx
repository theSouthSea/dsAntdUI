import { Button } from "antd"

import { useAppAPIContext, useAppThemeContext } from "@/config/AppConfigProvider"

import { Header as StyledHeader } from "./styled"

const Header = () => {
  const { updateTheme, updateLocale } = useAppAPIContext()
  const theme = useAppThemeContext()
  return (
    <StyledHeader>
      <Button onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}>切换主题</Button>
      <Button onClick={() => updateLocale("zh-CN")}>切换语言</Button>
    </StyledHeader>
  )
}
export default Header
