import { ORow, OCol, OInput, OCheckbox, OForm } from '@ocloud/ui'
import ImgUpload from '@/components/ImgUpload'
import { ImgTextProps } from '..'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'

export type AllLeftFiguresProps = ImgTextProps & {
  title?: string
}
function AllLeftFigures({
  title = '左图右文',
  name,
  sort,
  size,
  form,
  onOperate,
}: AllLeftFiguresProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const operationButton = useOperationButton(sort, size, onOperate)
  // 是否采用角标
  const subscriptCurrentArr = OForm.useWatch('productDescriptionArr', form)
  const subscriptCurrentFlag =
    subscriptCurrentArr &&
    subscriptCurrentArr.length &&
    subscriptCurrentArr[nameArr[0]].subscriptFlag

  return (
    <ORow gutter={20} className={styles.moduleBorder}>
      <OCol span={24}>
        <OForm.Item>
          <ModuleTitle title={title} />
          {operationButton}
        </OForm.Item>
        <ORow gutter={20}>
          <OCol span={12}>
            <OForm.Item label="PC端" name={[...nameArr, 'pcImgUrl']}>
              <ImgUpload />
            </OForm.Item>
          </OCol>
          <OCol span={12}>
            <OForm.Item label="H5端" name={[...nameArr, 'h5ImgUrl']}>
              <ImgUpload />
            </OForm.Item>
          </OCol>
        </ORow>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'literalText1']} noStyle>
            <OInput addonBefore="文本1" className="mb5" />
          </OForm.Item>
        </OForm.Item>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'literalText2']} noStyle>
            <OInput addonBefore="文本2" className="mb5" />
          </OForm.Item>
        </OForm.Item>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'linkUrl']} noStyle>
            <OInput
              addonBefore="跳转链接"
              className="mb5"
              maxLength={300}
              showCount
            />
          </OForm.Item>
        </OForm.Item>
        <OForm.Item
          name={[...nameArr, 'subscriptFlag']}
          valuePropName="checked"
          noStyle
        >
          <OCheckbox className="mb15">添加角标</OCheckbox>
        </OForm.Item>
        {subscriptCurrentFlag && (
          <OForm.Item>
            <OForm.Item name={[...nameArr, 'subscriptText']} noStyle>
              <OInput
                disabled={!subscriptCurrentFlag}
                addonBefore="角标文案"
                className="mb10"
                maxLength={20}
                showCount
              />
            </OForm.Item>
            <div>（角标样式和位置前端写死）</div>
          </OForm.Item>
        )}
      </OCol>
    </ORow>
  )
}

export default AllLeftFigures
