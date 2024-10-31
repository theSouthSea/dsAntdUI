import SvgAudio from "@/assets/svg/fileExtensions/audio.svg?react"
import SvgDocx from "@/assets/svg/fileExtensions/docx.svg?react"
import SvgImage from "@/assets/svg/fileExtensions/image.svg?react"
import SvgPdf from "@/assets/svg/fileExtensions/PDF.svg?react"
import SvgPptx from "@/assets/svg/fileExtensions/ppt.svg?react"
import SvgTxt from "@/assets/svg/fileExtensions/txt.svg?react"
import SvgUnknown from "@/assets/svg/fileExtensions/unknown.svg?react"
import SvgVideo from "@/assets/svg/fileExtensions/video.svg?react"
import SvgXlsx from "@/assets/svg/fileExtensions/xlsx.svg?react"
import SvgZip from "@/assets/svg/fileExtensions/zip.svg?react"

export const FileExtensionMap = {
  pdf: SvgPdf,
  docx: SvgDocx,
  doc: SvgDocx,
  jpg: SvgImage,
  jpeg: SvgImage,
  png: SvgImage,
  svg: SvgImage,
  gif: SvgImage,
  webp: SvgImage,
  bmp: SvgImage,
  pptx: SvgPptx,
  ppt: SvgPptx,
  xlsx: SvgXlsx,
  xls: SvgXlsx,
  csv: SvgXlsx,
  txt: SvgTxt,
  mp4: SvgVideo,
  avi: SvgVideo,
  mkv: SvgVideo,
  flv: SvgVideo,
  mov: SvgVideo,
  wmv: SvgVideo,
  webm: SvgVideo,
  mpg: SvgVideo,
  mpeg: SvgVideo,
  mp3: SvgAudio,
  wav: SvgAudio,
  ogg: SvgAudio,
  flac: SvgAudio,
  aac: SvgAudio,
  m4a: SvgAudio,
  wma: SvgAudio,
  aiff: SvgAudio,
  zip: SvgZip,
  rar: SvgZip,
  "7z": SvgZip,
  tar: SvgZip,
  gz: SvgZip,
  bz2: SvgZip,
  unknown: SvgUnknown,
}
