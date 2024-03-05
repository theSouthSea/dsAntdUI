import { useContext } from "react"

import { ConfigContext, useConfigContext } from "../context/ConfigContext"

const useMessage = () => {
  const { _messageRef: messageRef } = useContext(ConfigContext)
  const { _messageRef } = useConfigContext()
  console.log("useMessage-ref", _messageRef, messageRef.current)
  return _messageRef.current
}
export default useMessage
