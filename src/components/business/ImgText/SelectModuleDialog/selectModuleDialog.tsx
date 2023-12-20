import { Modal } from "@base"
import { memo, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import styles from "./styles.module.less"
import ModuleList, { ModuleType } from "./moduleList"
import SelectedModule from "./selectedModule"

export type SelectModuleDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  isProductPage?: boolean
  width?: number
  data?: SelectedModuleItem[]
  type?: DeviceType | "classification"
  onDataChange: (data: SelectedModuleItem[]) => void
}
export type SelectedModuleItem = Omit<ModuleType, "img"> & {
  key: string
}
export type SelectedModuleObj = {
  pc: SelectedModuleItem[]
  mobile: SelectedModuleItem[]
}
function SelectModuleDialog({
  open,
  onOpenChange,
  onDataChange,
  isProductPage = false,
  data,
  width = 900,
  type = "pc",
}: SelectModuleDialogProps) {
  const [selectedModule, setSelectedModule] = useState<SelectedModuleItem[]>(data || [])
  console.log("SelectModuleDialog", data)
  useEffect(() => {
    if (data) {
      setSelectedModule(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
  const handleOk = () => {
    onOpenChange(false)
    onDataChange(selectedModule)
  }

  const handleCancel = () => {
    onOpenChange(false)
  }
  const handleModuleSelected = (item: ModuleType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { img, ...rest } = item
    // const key = new Date().getTime()
    const key = uuidv4()
    setSelectedModule([...selectedModule, { ...rest, key }])
  }
  const handleDelete = (idx: number) => {
    const newArr = [...selectedModule]
    newArr.splice(idx, 1)
    setSelectedModule(newArr)
  }
  return (
    <Modal title="选择模块" open={open} onOk={handleOk} onCancel={handleCancel} width={width}>
      <div className={styles.moduleFlex}>
        <ModuleList onSelected={handleModuleSelected} isProductPage={isProductPage} type={type} />
        <div className={styles.line} />
        <SelectedModule data={selectedModule} onDelete={handleDelete} />
      </div>
    </Modal>
  )
}

export default memo(SelectModuleDialog)
