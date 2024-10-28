import type { Dispatch } from "@reduxjs/toolkit"

import { fetchLogin, logout } from "@/service"
import { LoginRequest } from "@/types/auth"
import { createAsyncAction } from "@/utils/reduxUtil"

import { setUserItem } from "./user.store"
// typed wrapper async thunk function demo, no extra feature, just for powerful typings
export const loginAsync = createAsyncAction<LoginRequest, boolean>((payload) => {
  return async (dispatch) => {
    const { result, status } = await fetchLogin(payload)

    if (status) {
      localStorage.setItem("t", result.token)
      localStorage.setItem("username", result.username)
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
    const { status } = await logout({ token: localStorage.getItem("t")! })

    if (status) {
      localStorage.clear()
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
