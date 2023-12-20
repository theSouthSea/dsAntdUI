import { useMemo } from 'react'
import { ORow, OCol, OInput, OForm, OTabs, OSpace } from '@ocloud/ui'
import ColorSelector from '@/components/ColorSelector'
import { FontFamilyColorSize, ImgTextProps } from '@/components/ImgText'
import ImgUpload from '@/components/ImgUpload'
import { TinyControlled } from '@/components/TinyComp'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'
import ModuleBaseForm from '@/components/ImgText/ModuleBaseForm/moduleBaseForm'

type TwoFiguresProps = ImgTextProps & {
  type?: 2 | 3
}
function TwoFigures({
  sort,
  size,
  onOperate,
  deviceType,
  name = [],
  type = 2,
  applyType,
}: TwoFiguresProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name]
  }
  const tabsItems = useMemo(() => {
    const arr = [
      {
        key: '1',
        label: '文本1',
        children: (
          <OForm.Item name={[...nameArr, 'description', 0]} className="mb0">
            <TinyControlled />
          </OForm.Item>
        ),
      },
      {
        key: '2',
        label: '文本2',
        children: (
          <OForm.Item name={[...nameArr, 'description', 1]} className="mb0">
            <TinyControlled />
          </OForm.Item>
        ),
      },
    ]
    if (type === 3) {
      arr.push({
        key: '3',
        label: '文本3',
        children: (
          <OForm.Item name={[...nameArr, 'description', 2]} className="mb0">
            <TinyControlled />
          </OForm.Item>
        ),
      })
    }
    return arr
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const operationButton = useOperationButton(sort, size, onOperate)
  return (
    <ORow gutter={20} className={styles.moduleBorder}>
      <OCol span={12}>
        <OForm.Item>
          <ModuleTitle title={type === 2 ? '双图-上图下文' : '三图-上图下文'} />
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
        <OForm.Item name={[...nameArr, 'title']} label="标题(选填)">
          <OInput />
        </OForm.Item>
        <FontFamilyColorSize name={nameArr} />
        <p>图片(建议尺寸636*480px):</p>
        <OForm.Item>
          <OSpace>
            <OForm.Item name={[...nameArr, 'imgData', 0, 'imgUrl']} noStyle>
              <ImgUpload />
            </OForm.Item>
            <OForm.Item name={[...nameArr, 'imgData', 1, 'imgUrl']} noStyle>
              <ImgUpload />
            </OForm.Item>
            {type === 3 && (
              <OForm.Item name={[...nameArr, 'imgData', 2, 'imgUrl']} noStyle>
                <ImgUpload />
              </OForm.Item>
            )}
          </OSpace>
        </OForm.Item>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'altLabel', 0]} noStyle>
            <OInput addonBefore="图片1Alt" className="mb15" />
          </OForm.Item>
          <OForm.Item name={[...nameArr, 'altLabel', 1]} noStyle>
            <OInput addonBefore="图片2Alt" className="mb15" />
          </OForm.Item>
          {type === 3 && (
            <OForm.Item name={[...nameArr, 'altLabel', 2]} noStyle>
              <OInput addonBefore="图片3Alt" />
            </OForm.Item>
          )}
        </OForm.Item>
      </OCol>
      <OCol span={12}>
        <OTabs defaultActiveKey="1" items={tabsItems} />
      </OCol>
    </ORow>
  )
}

export default TwoFigures
