import "./styles.css"

import React, { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => <button onClick={onClick}>{children}</button>

const withSomethingBroken = (Component: React.FC<ButtonProps>) => {
  // forgot to pass props!
  return (props: ButtonProps) => <Component />
}

const withSomethingNormal = (Component: React.FC<ButtonProps>) => {
  return (props: ButtonProps) => <Component {...props} />
}

const ButtonWithSomethingBroken = withSomethingBroken(Button)
const ButtonWithSomethingNormal = withSomethingNormal(Button)

export default function App() {
  return (
    <div className="App">
      <h3>Broken button - forgot to pass props in higher-order component</h3>
      <ButtonWithSomethingBroken onClick={() => console.log("log click")}>
        Broken button
      </ButtonWithSomethingBroken>
      <h3>Fixed button</h3>
      <ButtonWithSomethingNormal onClick={() => console.log("log click")}>
        Fixed button
      </ButtonWithSomethingNormal>
    </div>
  )
}
