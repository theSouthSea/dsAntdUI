import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { MenuChild } from "@/types/layout/menu.interface"
import type { Role } from "@/types/user/login"
import type { Locale, UserState } from "@/types/user/user"
import { getDevice } from "@/utils/getDevice"

const initialState: UserState = {
  ...getDevice(),
  noticeCount: 0,
  locale: (localStorage.getItem("locale")! || "en_US") as Locale,
  newUser: JSON.parse(localStorage.getItem("newUser")!) ?? true,
  logged: localStorage.getItem("t") ? true : false,
  menuList: [],
  username: localStorage.getItem("username") || "",
  role: (localStorage.getItem("username") || "") as Role,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserItem(state, action: PayloadAction<Partial<UserState>>) {
      const { username } = action.payload

      if (username !== state.username) {
        localStorage.setItem("username", action.payload.username || "")
      }

      Object.assign(state, action.payload)
    },
    setMenuList(state, action: PayloadAction<MenuChild[]>) {
      state.menuList = action.payload
    },
  },
})

export const { setUserItem, setMenuList } = userSlice.actions

export default userSlice.reducer
