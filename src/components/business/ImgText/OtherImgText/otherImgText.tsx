import { OForm, OModal, OButton } from '@ocloud/ui'
import type { FormInstance } from '@ocloud/ui'
import { useRef, useState } from 'react'
import { ModuleCompMap } from '../imgTextModuleMap'
import SelectModuleDialog, { SelectedModuleItem } from '../SelectModuleDialog'
import { HiddenBtn } from '../OperationButton'
import { ModuleTypeKey } from '@/domian/model/public'

export type OtherImgTextProps = {
  form: FormInstance
}
function OtherImgText({ form }: OtherImgTextProps) {
  const [, updatePage] = useState({})
  const [openModuleModal, setOpenModuleModal] = useState<boolean>(false)
  const separateTemplateDataRef = useRef<any[]>([])
  const separateTemplateData = OForm.useWatch('separateTemplateData', form)
  separateTemplateDataRef.current = separateTemplateData
  const handleOpenModuleModal = () => {
    setOpenModuleModal(true)
  }
  const handleSelectedModule = (data: SelectedModuleItem[]) => {
    console.log('handleSelectedModule=', data)
    form.setFieldValue('separateTemplateData', data)
  }

  const handleOperate = (type: HiddenBtn, sort: number) => {
    if (type === 'delete') {
      OModal.confirm({
        title: '提示',
        content: '是否确定删除?',
        onOk: () => {
          separateTemplateDataRef.current.splice(sort, 1)
          form.setFieldValue(
            'separateTemplateData',
            separateTemplateDataRef.current
          )
          updatePage({})
        },
      })
    } else if (type === 'down') {
      const [currentItem] = separateTemplateDataRef.current.splice(sort, 1)
      const targetIndex = sort + 1
      separateTemplateDataRef.current.splice(targetIndex, 0, currentItem)
      form.setFieldValue(
        'separateTemplateData',
        separateTemplateDataRef.current
      )
      updatePage({})
    } else if (type === 'up') {
      const [currentItem] = separateTemplateDataRef.current.splice(sort, 1)
      const targetIndex = sort - 1
      separateTemplateDataRef.current.splice(targetIndex, 0, currentItem)
      form.setFieldValue(
        'separateTemplateData',
        separateTemplateDataRef.current
      )
      updatePage({})
    }
  }
  const validateImgTextData = (_: any, vals: any[]) => {
    if (!vals || vals.length === 0) {
      return Promise.reject('内容是必填项')
    }
    return Promise.resolve()
  }
  return (
    <>
      <OForm.Item label="内容" required>
        <OButton type="primary" onClick={handleOpenModuleModal}>
          +添加模块
        </OButton>
        <OForm.List
          name="separateTemplateData"
          rules={[{ validator: validateImgTextData }]}
        >
          {(fields, _operate, { errors }) => (
            <>
              {fields.map(({ name, key }, index) => {
                const separateTemplateData = form.getFieldValue(
                  'separateTemplateData'
                )
                const MatchComp =
                  ModuleCompMap[
                    separateTemplateData[name].templateType as ModuleTypeKey
                  ]
                return (
                  <MatchComp
                    key={key}
                    name={name}
                    sort={index}
                    size={separateTemplateData.length}
                    onOperate={handleOperate}
                  />
                )
              })}
              <OForm.ErrorList errors={errors} />
            </>
          )}
        </OForm.List>
      </OForm.Item>
      <SelectModuleDialog
        data={separateTemplateData}
        open={openModuleModal}
        onOpenChange={setOpenModuleModal}
        onDataChange={handleSelectedModule}
        width={900}
      />
    </>
  )
}
export default OtherImgText
