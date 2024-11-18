import { UploadOutlined } from "@ant-design/icons"
import type { DragEndEvent } from "@dnd-kit/core"
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { UploadFile, UploadProps } from "antd"
import { Button, message, Upload } from "antd"
import React, { useState } from "react"

interface DraggableUploadListItemProps {
  originNode: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  file: UploadFile<any>
}
const DOCUMENT_MAX_SIZE = 1024 * 1024 * 10
const VIDEO_MAX_SIZE = 1024 * 1024 * 500
const AUDIO_MAX_SIZE = 1024 * 1024 * 100
const IMAGE_MAX_SIZE = 1024 * 1024 * 2
const DraggableUploadListItem = ({ originNode, file }: DraggableUploadListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.uid,
  })

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "move",
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      // prevent preview event when drag end
      className={isDragging ? "is-dragging" : ""}
      {...attributes}
      {...listeners}
    >
      {/* hide error tooltip when dragging */}
      {file.status === "error" && isDragging ? originNode.props.children : originNode}
    </div>
  )
}

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image1.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image2.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image3.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image4.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ])

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id)
        const overIndex = prev.findIndex((i) => i.uid === over?.id)
        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const beforeUpload = (file: UploadFile<any>) => {
    const { size, type } = file as any
    if (type?.indexOf("image") > -1) {
      if (size > IMAGE_MAX_SIZE) {
        message.error("图片大小不能超过2M")
        return Upload.LIST_IGNORE
      }
    } else if (type?.indexOf("video") > -1) {
      if (size > VIDEO_MAX_SIZE) {
        message.error("视频大小不能超过500M")
        return Upload.LIST_IGNORE
      }
    } else if (type?.indexOf("audio") > -1) {
      if (size > AUDIO_MAX_SIZE) {
        message.error("音频大小不能超过100M")
        return Upload.LIST_IGNORE
      }
    }
    return true
  }

  return (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext items={fileList.map((i) => i.uid)} strategy={verticalListSortingStrategy}>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          fileList={fileList}
          onChange={onChange}
          beforeUpload={beforeUpload}
          itemRender={(originNode, file) => (
            <DraggableUploadListItem originNode={originNode} file={file} />
          )}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </SortableContext>
    </DndContext>
  )
}

export default App
