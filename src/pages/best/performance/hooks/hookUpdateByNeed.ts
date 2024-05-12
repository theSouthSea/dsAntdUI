import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const useNormalDataHook = () => {
  const [data, setData] = useState({ info: null, count: null })
  useEffect(() => {
    const timer = setInterval(() => {
      setData((data) => ({
        ...data,
        count: data.count + 1,
      }))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  })

  return data
}

export const useOnDemandDataHook = () => {
  const setter = useState({})[1]
  const forceUpdate = useCallback(() => setter({}), [setter])
  const dependenciesRef = useRef({ info: false, count: false })
  const dataRef = useRef({ info: null, count: 0 })
  const dispatch = useCallback(
    (payload) => {
      dataRef.current = { ...dataRef.current, ...payload }
      const needUpdate = Object.keys(payload).some((key) => dependenciesRef.current[key])
      if (needUpdate) {
        forceUpdate()
      }
    },
    [forceUpdate]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ count: dataRef.current.count + 1 })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [dispatch])

  return useMemo(() => {
    return Object.defineProperties(
      {},
      {
        info: {
          get: function () {
            dependenciesRef.current.info = true
            return dataRef.current.info
          },
          enumerable: true,
        },
        count: {
          get: function () {
            dependenciesRef.current.count = true
            return dataRef.current.count
          },
          enumerable: true,
        },
      }
    )
  }, [])
}
