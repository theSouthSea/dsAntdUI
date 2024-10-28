// for date-picker i18n
import "dayjs/locale/zh-cn"
import "dayjs/locale/en"

import { ConfigProvider, message, theme } from "antd"
import enUS from "antd/locale/en_US"
import zhCN from "antd/locale/zh_CN"
import dayjs from "dayjs"
import { Suspense, useEffect } from "react"
import { useLocation, useNavigate, useRoutes } from "react-router-dom"

import routes from "@/router/newRoutes"
import { getToken } from "@/utils/auth"

import AppConfigProvider, {
  useAppLocaleContext,
  useAppThemeContext,
} from "./config/AppConfigProvider"

const languageList = {
  "zh-CN": zhCN,
  "en-US": enUS,
}
// 去往登录页的组件
function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo("/login")
    message.warning("您还没有登录，请登录后再访问！")
  }, [navigateTo])
  return <div></div>
}

// 去往首页的组件
function ToHome() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo("/")
    message.warning("您已经登录过了！")
  }, [navigateTo])
  return <></>
}

function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  const location = useLocation()
  const token = getToken()
  //1、如果访问的是登录页面， 并且有token， 跳转到首页
  if (location.pathname === "/login" && token) {
    // 这里不能直接用 useNavigate 来实现跳转 ，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToHome />
  }
  //2、如果访问的不是登录页面，并且没有token， 跳转到登录页
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />
  }
  return <Suspense fallback={<div>loading...</div>}>{outlet}</Suspense>
}
function AppConfig() {
  const locale = useAppLocaleContext()
  const globalTheme = useAppThemeContext()
  if (locale === "en-US") {
    dayjs.locale("en") // 使用本地化语言
  } else {
    dayjs.locale("zh-cn")
  }
  console.log("globalTheme", globalTheme)
  return (
    <ConfigProvider
      locale={languageList[locale]}
      theme={{
        token: { colorPrimary: "#13c2c2" },
        // 1. 单独使用暗色算法
        algorithm: globalTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <BeforeRouterEnter />
    </ConfigProvider>
  )
}

function App() {
  // return <BeforeRouterEnter />
  return (
    <AppConfigProvider>
      <AppConfig></AppConfig>
    </AppConfigProvider>
  )
}

export default App
