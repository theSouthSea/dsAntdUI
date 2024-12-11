import { createContext } from "react"

import store, { Timer } from "../store"

export const TimerContext = createContext<Timer>({} as Timer)

export const MobxProvider = ({ children }) => {
  return <TimerContext.Provider value={store}>{children}</TimerContext.Provider>
}
