import React, { useEffect, useRef, useState } from "react"

const withCache = (WrappedComponent) => {
  const cache = new Map()

  return (props) => {
    const cacheKey = props.cacheKey || "default"
    const cachedInstanceRef = useRef<any>(null)
    const [, forceUpdate] = useState({})

    useEffect(() => {
      if (props.isShow) {
        if (!cache.has(cacheKey)) {
          cachedInstanceRef.current = React.createElement(WrappedComponent, props)
          cache.set(cacheKey, React.createElement(WrappedComponent, props))
        } else {
          cachedInstanceRef.current = cache.get(cacheKey)
        }
      } else {
        cachedInstanceRef.current = null
      }
      forceUpdate({})
    }, [cacheKey, props])
    useEffect(() => {
      return () => {
        cache.set(cacheKey, cachedInstanceRef.current)
      }
    }, [cacheKey])

    // if (!cachedInstanceRef.current) {
    //   cachedInstanceRef.current = cache.get(cacheKey)
    // }

    return cachedInstanceRef.current
  }
}

export default withCache
