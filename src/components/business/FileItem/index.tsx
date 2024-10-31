import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  EyeTwoTone,
} from "@ant-design/icons"
import { Spin } from "antd"
import { useMemo } from "react"

import { FileExtensionMap } from "@/consts/fileExtensionMap"

import styles from "./index.module.less"

export interface FileInfo {
  name: string
  status?: "uploading" | "done" | "error" | "removed"
  url: string
  uid: string
  id?: string | number
  percent?: number
  creationDate: string
}
interface FileItemProps {
  data: FileInfo
  onEdit: (data: FileInfo) => void
  onDelete: (id: number | string) => void
  onDeleteError: (uid: string) => void
  onPreview?: (data: FileInfo) => void
}
const FileItem = (props: FileItemProps) => {
  const { data, onEdit, onDelete, onDeleteError, onPreview } = props
  const fileExtension = data.name.split(".").pop()
  const FileIcon = FileExtensionMap[fileExtension as keyof typeof FileExtensionMap]
  const statusAndEditEle = useMemo(() => {
    if (data.status === "uploading") {
      return (
        <div className={styles.iconText}>
          <Spin percent="auto" size="default"></Spin>
        </div>
      )
    }
    if (data.status === "error") {
      return (
        <>
          <CloseCircleTwoTone twoToneColor="#f00" />
          <div className={styles.iconText} onClick={() => onDeleteError(data.uid)}>
            <DeleteTwoTone twoToneColor="#666" />
            删除
          </div>
        </>
      )
    }
    return (
      <>
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <div className={styles.iconText} onClick={() => onEdit(data)}>
          <EditTwoTone twoToneColor="#666" />
          编辑
        </div>
      </>
    )
  }, [data.status])
  return (
    <div className={styles.itemContainer}>
      <div className={styles.infoBox}>
        <FileIcon width={48} height={48} fontSize={48}></FileIcon>
        <div className={styles.describeBox}>
          <div className={styles.title} title={data.name}>
            {data.name}
          </div>
          {data.creationDate && (
            <div className={styles.describe}>文档于{data.creationDate.slice(0, 10)}更新</div>
          )}
        </div>
      </div>
      <div className={styles.actionBox}>
        {statusAndEditEle}
        {data.id && (
          <>
            <div className={styles.iconText} onClick={() => onPreview?.(data)}>
              <EyeTwoTone twoToneColor="#52c41a" />
              预览
            </div>
            <div className={styles.iconText} onClick={() => onDelete(data.id!)}>
              <DeleteTwoTone twoToneColor="#666" />
              删除
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default FileItem
