import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Dropdown, Tooltip } from "antd"
import { createElement } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import Avator from "@/assets/header/avator.jpeg"
import EnUsSvg from "@/assets/header/en_US.svg?react"
import LanguageSvg from "@/assets/header/language.svg?react"
import MoonSvg from "@/assets/header/moon.svg?react"
import SunSvg from "@/assets/header/sun.svg?react"
import ZhCnSvg from "@/assets/header/zh_CN.svg?react"
import AntdSvg from "@/assets/logo/antd.svg?react"
import {
  useAppAPIContext,
  useAppLocaleContext,
  useAppThemeContext,
} from "@/config/AppConfigProvider"
import { AppDispatch, RootState } from "@/store"
import { logoutAsync } from "@/store/user.action"
import { getToken } from "@/utils/auth"

import { Header as StyledHeader } from "./styled"

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const logged = getToken()
  // const logged = useSelector((state: RootState) => state.user.logged)
  const { updateTheme, updateLocale } = useAppAPIContext()
  const theme = useAppThemeContext()
  const locale = useAppLocaleContext()
  const handleLanguageChange = (e: any) => {
    console.log("handleLanguageChange-e", e)
    updateLocale(e.key)
  }
  // console.log("theme=", theme)
  const handleThemeChange = (e: any) => {
    console.log("handleThemeChange-e", e)
    updateTheme(theme === "dark" ? "light" : "dark")
  }
  const navigate = useNavigate()
  const toLogin = () => {
    navigate("/login")
  }

  const handleQuit = async () => {
    // console.log("退出=")
    // removeToken()
    const isSuccess = await dispatch(logoutAsync())
    console.log("logoutAsync-isSuccess=", isSuccess)
    if (isSuccess) {
      navigate("/login")
    }
  }
  return (
    <>
      <AntdSvg style={{ width: 30, height: 30 }}></AntdSvg>
      <StyledHeader>
        <Tooltip title={theme === "dark" ? "切换到亮色模式" : "切换到暗色模式"} trigger="hover">
          <span style={{ height: "100%", display: "flex", alignItems: "center" }}>
            {createElement(theme === "dark" ? SunSvg : MoonSvg, {
              onClick: handleThemeChange,
            })}
          </span>
        </Tooltip>
        <Dropdown
          menu={{
            onClick: handleLanguageChange,
            items: [
              {
                key: "zh-CN",
                icon: <ZhCnSvg />,
                disabled: locale === "zh-CN",
                label: "简体中文",
              },
              {
                key: "en-US",
                icon: <EnUsSvg />,
                disabled: locale === "en-US",
                label: "English",
              },
            ],
          }}
        >
          <span>
            <LanguageSvg id="language-change" />
          </span>
        </Dropdown>
        {logged ? (
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: <span onClick={() => navigate("/dashboard")}>个人信息</span>,
                },
                {
                  key: "2",
                  icon: <LogoutOutlined />,
                  label: <span onClick={handleQuit}>退出</span>,
                },
              ],
            }}
          >
            <span className="user-action">
              <img src={Avator} className="user-avator" alt="avator" width="40" height="40" />
            </span>
          </Dropdown>
        ) : (
          <span style={{ cursor: "pointer" }} onClick={toLogin}>
            登录
          </span>
        )}
      </StyledHeader>
    </>
  )
}
export default Header
