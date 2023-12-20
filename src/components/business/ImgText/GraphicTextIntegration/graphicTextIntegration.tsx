import { ORow, OCol, OInput, OForm, OButton, OTabs } from '@ocloud/ui'
import ImgUpload from '@/components/ImgUpload'
import { TinyControlled } from '@/components/TinyComp'
import AllPositionSetting from '@/components/PositionSetting'
import ModuleTitle from '../ModuleTitle'
import { ImgTextProps, NameType } from '../index'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'

import { IMGTEXT_GAP, POSITION_INITVALUE } from '@/utils/constants'
import ModuleBaseForm from '@/components/ImgText/ModuleBaseForm/moduleBaseForm'

function GraphicTextIntegration({
  name = [],
  sort,
  size,
  onOperate,
  deviceType,
  applyType,
}: ImgTextProps) {
  let nameArr = name as NameType
  if (!Array.isArray(name)) {
    nameArr = [name]
  }
  const operationButton = useOperationButton(sort, size, onOperate)
  return (
    <ORow gutter={IMGTEXT_GAP} className={styles.moduleBorder}>
      <OCol span={12}>
        <OForm.Item>
          <ModuleTitle title="图文一体" />
          {operationButton}
        </OForm.Item>
        <ModuleBaseForm
          nameArr={nameArr}
          deviceType={deviceType}
          applyType={applyType}
        />
        <p>图片(建议尺寸1920*900px):</p>
        <OForm.Item name={[...nameArr, 'imgUrl']}>
          <ImgUpload />
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'altLabel']}>
          <OInput addonBefore="图片Alt" />
        </OForm.Item>
      </OCol>
      <OCol span={12}>
        <OForm.List name={[...nameArr, 'productText']}>
          {(fields, { add, remove }) => {
            return (
              <>
                <OButton type="primary" onClick={() => add(POSITION_INITVALUE)}>
                  添加文本
                </OButton>
                <OTabs>
                  {fields.map(({ name, key }, index) => (
                    <OTabs.TabPane tab={`文本${String(index + 1)}`} key={key}>
                      <OButton
                        type="primary"
                        danger
                        onClick={() => remove(name)}
                      >
                        删除
                      </OButton>
                      <AllPositionSetting parentFieldName={[name]} />
                      <OForm.Item name={[name, 'description']} className="mb0">
                        <TinyControlled />
                      </OForm.Item>
                    </OTabs.TabPane>
                  ))}
                </OTabs>
              </>
            )
          }}
        </OForm.List>
      </OCol>
    </ORow>
  )
}

export default GraphicTextIntegration
