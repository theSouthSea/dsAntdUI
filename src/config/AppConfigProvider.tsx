import { createContext, ReactNode, useContext, useMemo, useReducer } from "react"

interface State {
  locale: "en-US" | "zh-CN"
  theme: "light" | "dark"
}
type Actions =
  | { type: "updateLocale"; locale: State["locale"] }
  | { type: "updateTheme"; theme: State["theme"] }
type API = {
  updateLocale: (locale: State["locale"]) => void
  updateTheme: (theme: State["theme"]) => void
}
const AppConfigAPIContext = createContext({} as API)
const AppLocaleContext = createContext("en-US" as State["locale"])
const AppThemeContext = createContext("light" as State["theme"])
export const useAppAPIContext = () => useContext(AppConfigAPIContext)
export const useAppLocaleContext = () => useContext(AppLocaleContext)
export const useAppThemeContext = () => useContext(AppThemeContext)
const appReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "updateLocale":
      return {
        ...state,
        locale: action.locale,
      }
    case "updateTheme":
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}
const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, {
    locale: "en-US",
    theme: "light",
  } as State)
  const api = useMemo(() => {
    return {
      updateLocale: (locale: State["locale"]) => {
        dispatch({
          type: "updateLocale",
          locale,
        })
      },
      updateTheme: (theme: State["theme"]) => {
        dispatch({
          type: "updateTheme",
          theme,
        })
      },
    }
  }, [])

  return (
    <AppConfigAPIContext.Provider value={api}>
      <AppLocaleContext.Provider value={state.locale}>
        <AppThemeContext.Provider value={state.theme}>{children}</AppThemeContext.Provider>
      </AppLocaleContext.Provider>
    </AppConfigAPIContext.Provider>
  )
}
export default AppConfigProvider
