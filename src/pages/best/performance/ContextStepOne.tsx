import React, { createContext, ReactNode, useContext, useMemo, useState } from "react"

const Context = createContext<{ value: number }>({ value: 1 })
const Context2 = createContext<{ value: number }>({ value: 1 })

const Provider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  const value = useMemo(
    () => ({
      value: state,
    }),
    [state]
  )
  return <Context.Provider value={value}>{children}</Context.Provider>
}

const Provider2 = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  const value = {
    value: state,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const useValue = () => useContext(Context)
const useValue2 = () => useContext(Context2)

const Child1 = () => {
  const { value } = useValue()
  const { value: value2 } = useValue2()
  console.log("Child1 re-renders: ", value, value2)
  return <></>
}

const Child2 = () => {
  const { value } = useValue()
  const { value: value2 } = useValue2()
  console.log("Child2 re-renders", value, value2)
  return <></>
}

const Child1Memo = React.memo(Child1)
const Child2Memo = React.memo(Child2)

const App = () => {
  const [state, setState] = useState(1)

  const onClick = () => {
    setState(state + 1)
  }

  return (
    <Provider>
      <Provider2>
        <h2>Open console, click a button</h2>
        <p>
          Children will unnecessary re-render because of the second provider, which doesn't memoize
          value
        </p>
        <button onClick={onClick}>button {state}</button>
        <Child1Memo />
        <Child2Memo />
      </Provider2>
    </Provider>
  )
}

export default App
