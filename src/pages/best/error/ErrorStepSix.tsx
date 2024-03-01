import { useState } from "react"

import ErrorBoundary from "./ErrorBoundary"

const Component = ({ onError }: { onError: () => void }) => {
  const onClick = () => {
    try {
      throw new Error("Hulk smash!")
    } catch (e) {
      // just call a prop instead of maintaining state here
      onError()
    }
  }

  return <button onClick={onClick}>click me</button>
}

const ComponentWithBoundary = () => {
  const [hasError, setHasError] = useState()
  const fallback = <div>Oh no! Something went wrong</div>

  if (hasError) return fallback

  return (
    <ErrorBoundary fallback={fallback}>
      <Component onError={() => setHasError(true)} />
    </ErrorBoundary>
  )
}
export default ComponentWithBoundary
