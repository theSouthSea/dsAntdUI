import { ORow, OCol, OInput, OForm } from '@ocloud/ui'
import ColorSelector from '@/components/ColorSelector'
import ImgUpload from '@/components/ImgUpload'
import { TinyControlled } from '@/components/TinyComp'
import { ImgTextProps } from '..'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'
import ModuleBaseForm from '@/components/ImgText/ModuleBaseForm/moduleBaseForm'

export type OneImgOneTextProps = ImgTextProps & {
  title?: string
}
function OneImgOneText({
  title = '左图右文',
  name,
  sort,
  size,
  onOperate,
  deviceType,
  applyType,
}: OneImgOneTextProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const operationButton = useOperationButton(sort, size, onOperate)

  return (
    <ORow gutter={20} className={styles.moduleBorder}>
      <OCol span={12}>
        <OForm.Item>
          <ModuleTitle title={title} />
          {operationButton}
        </OForm.Item>
        <ModuleBaseForm
          nameArr={nameArr}
          deviceType={deviceType}
          applyType={applyType}
        />
        <OForm.Item
          name={[...nameArr, 'background']}
          valuePropName="color"
          label="背景色"
        >
          <ColorSelector label="" />
        </OForm.Item>
        <p>图片(建议尺寸750*540px):</p>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'imgUrl']} noStyle>
            <ImgUpload />
          </OForm.Item>
        </OForm.Item>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'altLabel']} noStyle>
            <OInput addonBefore="图片Alt" className="mb15" />
          </OForm.Item>
        </OForm.Item>
      </OCol>
      <OCol span={12}>
        <OForm.Item name={[...nameArr, 'description']} label="文本" noStyle>
          <TinyControlled />
        </OForm.Item>
      </OCol>
    </ORow>
  )
}

export default OneImgOneText
