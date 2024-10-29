import type { Dispatch } from "@reduxjs/toolkit"

import { fetchLogin, logout } from "@/service"
import { LoginRequest } from "@/types/auth"
import { getToken, removeToken, setToken } from "@/utils/auth"
import { createAsyncAction } from "@/utils/reduxUtil"

import { setUserItem } from "./user.store"
// typed wrapper async thunk function demo, no extra feature, just for powerful typings
export const loginAsync = createAsyncAction<LoginRequest, boolean>((payload) => {
  return async (dispatch) => {
    // const res = await fetchLogin(payload)
    const { data: result, error } = await fetchLogin(payload)
    // console.log("res=", res)
    // const { data: result, code } = await fetchLogin(payload)

    if (result) {
      // localStorage.setItem("t", result.token)
      // localStorage.setItem("username", result.username)
      setToken(result.token)
      dispatch(
        setUserItem({
          logged: true,
          username: result.username,
        }),
      )

      return true
    }

    return false
  }
})

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    const token = getToken()
    console.log("token=", token)
    const { data, error } = await logout({ token })

    if (data) {
      removeToken()
      dispatch(
        setUserItem({
          logged: false,
        }),
      )

      return true
    }

    return false
  }
}
