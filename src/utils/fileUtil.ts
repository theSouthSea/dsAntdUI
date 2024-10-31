export interface FileInfo {
  type: "video" | "audio" | "document"
  extension: string
}
export const getFileType = (filename: string): FileInfo => {
  let type: FileInfo["type"] = "document"
  const extension = (filename.split(".").pop() as string).toLowerCase()
  if (["mp4", "mkv", "avi"].includes(extension)) {
    type = "video"
  } else if (["mp3", "wav", "ogg"].includes(extension)) {
    type = "audio"
  }
  return { type, extension }
}
