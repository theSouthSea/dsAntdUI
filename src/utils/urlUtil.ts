export const getUrlSearchParamsByUrl = (url: string) => {
  const search = url.split("?")[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
      '"}',
  )
}
export const getSearchParamsByUrlSearchParams = (): URLSearchParams => {
  const search = decodeURIComponent(window.location.search)
  return new URLSearchParams(search)
}
export const memorizedUrlSearchParams = () => {
  const cache = {}
  return (): URLSearchParams => {
    if (!cache[window.location.href]) {
      cache[window.location.href] = getSearchParamsByUrlSearchParams()
    }
    return cache[window.location.href]
  }
}
