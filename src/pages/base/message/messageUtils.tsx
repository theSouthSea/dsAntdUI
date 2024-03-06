import { createRoot } from "react-dom/client"

import Message from "./Message"

export const messageUtils = {
  add: (config: any) => {
    console.log("add", config)
    const div = document.createElement("div")
    document.body.appendChild(div)
    createRoot(div).render(<Message>{config.content}</Message>)
  },
  remove: (message: string) => {
    console.log(message)
  },
  warning: (message: string) => {
    console.log(message)
  },
  info: (message: string) => {
    console.log(message)
  },
}
