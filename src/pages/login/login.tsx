import { Button, Input, message, Space } from "antd"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchGetCode, fetchLogin } from "@/service/api"
import { AppDispatch } from "@/store/index.ts"
import { loginAsync } from "@/store/user.action.ts"
import { LoginRequest } from "@/types/auth.ts"

import RandomCode from "./identifyCodes.ts"
import styles from "./login.module.less"
import LoginBgAnimation from "./loginBgAnimation.ts"

const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigateTo = useNavigate()
  const loginInfo: LoginRequest = {
    name: "",
    password: "",
    code: "",
    originCode: "",
  }
  useEffect(() => {
    LoginBgAnimation()
    window.onresize = function () {
      LoginBgAnimation()
    }
    const fetchCode = async () => {
      const { data } = await fetchGetCode()
      if (data) {
        RandomCode(data.code)
        loginInfo.originCode = data.code
      }
    }
    fetchCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const userChange = (value: string, name: string) => {
    loginInfo[name] = value
  }

  const gotoLogin = async () => {
    let empty: string = ""
    Object.keys(loginInfo)
      .reverse()
      .forEach((key) => {
        if (!loginInfo[key]) {
          empty = getWaring(key)
        }
      })
    if (empty) {
      return message.warning(empty)
    }

    // const { data, error } = await fetchLogin(loginInfo)
    // if (error) {
    //   onRefresh()
    // } else {
    //   setToken(data.token)
    //   window.onresize = null
    //   navigateTo("/")
    // }
    console.log("loginInfo=", loginInfo)
    const isSuccess = await dispatch(loginAsync(loginInfo))
    console.log("loginAsync: ", isSuccess)
    if (!isSuccess) {
      onRefresh()
    } else {
      window.onresize = null
      navigateTo("/")
    }
  }
  const onRefresh = async () => {
    const { data } = await fetchGetCode()
    if (data) {
      RandomCode(data.code)
      loginInfo.originCode = data.code
    }
  }
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="bg-canvas" style={{ display: "block" }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + " loginbox"}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>规范后台系统</h1>
          <p>助力成长每一天</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" onChange={(e) => userChange(e.target.value, "name")} />

            <Input.Password
              placeholder="密码"
              onChange={(e) => userChange(e.target.value, "password")}
            />
            <div className={styles.captchaBox}>
              <Input placeholder="验证码" onChange={(e) => userChange(e.target.value, "code")} />
              <canvas
                id="code-canvas"
                width="100"
                height="32"
                onClick={onRefresh}
                style={{ cursor: "pointer" }}
              ></canvas>
            </div>
            <Button type="primary" className="loginBtn" block onClick={gotoLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
function getWaring(type: string) {
  switch (type) {
    case "name":
      return "请输入名字"
    case "password":
      return "请输入密码"
    case "code":
      return "请输入验证码"
    default:
      return ""
  }
}
export default Login
