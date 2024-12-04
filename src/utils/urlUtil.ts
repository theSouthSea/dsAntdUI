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
export const memorizedPathSectionByNumber = () => {
  const cache = {}
  return (num = 2): string[] => {
    if (!cache[window.location.pathname]) {
      cache[window.location.pathname] = getLastPathSectionByNumer(num)
    }
    return cache[window.location.pathname]
  }
}
export const getLastPathSectionByNumer = (num = 2): string[] => {
  const pathname = decodeURIComponent(window.location.pathname)
  const pathSections = pathname.split("/").reverse()
  const res = pathSections.reduce((path: string[], cur) => {
    if (cur && path.length < num) {
      path.push(cur)
    }
    return path
  }, [])
  return res
}
// export const getLastPathSectionByNumer2 = (num=2) => {
//   const pathname = decodeURIComponent(window.location.pathname)
//   const pathSections = pathname.split("/").reverse();
//   const res = pathSections.reduce((path, cur) => {
//     if (cur && path.length < num) {
//       path.push(cur)
//     }
//     return path
//   }, [])
//   return res;
// }
type TestPaperInfo = {
  courseId: string
  courseName: string
  examId: string
}
export const getTestPaperInfoFormUrl = (): TestPaperInfo => {
  const [courseName, courseId] = memorizedPathSectionByNumber()(2)
  const lastIndex = courseName.lastIndexOf("_")
  const lastIndexReal = lastIndex === -1 ? undefined : lastIndex
  const courseNameReal = courseName.slice(0, lastIndexReal)
  const examIdStr = lastIndexReal === undefined ? "" : courseName.slice(lastIndexReal + 1)
  const examId = /^\d+$/.test(examIdStr) ? examIdStr : ""
  return {
    courseId,
    courseName: courseNameReal,
    examId,
  }
}
