import React, { ReactElement, ReactNode, useState } from 'react'

type Props = { children: ReactNode; fallback: ReactElement }
type State = { hasError: boolean }

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // initialize the error state
    this.state = { hasError: false }
  }

  // if an error happened, set the state to true
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // send error to somewhere here
    console.log(error, errorInfo)
  }

  render() {
    // if error happened, return a fallback component
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

export const useThrowAsyncError = () => {
  const [, setState] = useState()

  return (error: any) => {
    setState(() => {
      throw error
    })
  }
}

export const useCallbackWithErrorHandling = (callback: (args: any[]) => void) => {
  const [, setState] = useState()

  return (...args: any[]) => {
    try {
      callback(args)
    } catch (e) {
      setState(() => {
        throw e
      })
    }
  }
}

