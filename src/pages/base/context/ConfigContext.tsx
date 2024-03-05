import {
  createContext,
  createRef,
  ReactElement,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from "react"

import { RefProps } from "../message/interface"
import MessageProvider from "../message/MessageProvider"

interface ConfigContextValue {
  _messageRef: RefObject<RefProps>
}
const _messageRef = createRef<RefProps>()
const configContextDefault = {
  _messageRef,
}
export const ConfigContext = createContext(configContextDefault as ConfigContextValue)
export const useConfigContext = () => useContext(ConfigContext)
interface ConfigContextProviderProps extends Partial<ConfigContextValue> {
  children: ReactElement | ReactElement[]
}
const ConfigContextProvider = (props: ConfigContextProviderProps) => {
  const { children, ...otherProps } = props
  // const config = {...configContextDefault,...otherProps}
  // const _messageRef = useRef(null)
  const config = useMemo(() => {
    return {
      ...configContextDefault,
      ...otherProps,
    }
  }, [otherProps])
  return (
    <ConfigContext.Provider value={config}>
      <MessageProvider ref={config._messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  )
}
export default ConfigContextProvider
