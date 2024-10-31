import { UploadFile } from "antd"

interface PreviewContentProps<T = any> {
  file: UploadFile<T>
}
const PreviewContent = (props: PreviewContentProps) => {
  const { file } = props
  const { type, url, thumbUrl } = file
  const realUrl = url || thumbUrl
  const isVideo = Number(type?.indexOf("video/")) > -1
  const isAudio = (type?.indexOf("audio/") ?? -1) > -1
  const isDoc = !(isVideo || isAudio)
  return (
    <div>
      {isVideo && <video src={realUrl} controls className="preview-content" />}
      {isAudio && <audio src={realUrl} controls className="preview-content" />}
      {isDoc && <embed src={realUrl} type="application/pdf" className="preview-content" />}
    </div>
  )
}
export default PreviewContent
