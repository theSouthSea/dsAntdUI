import { ORow, OCol, OButton, OTabs, OForm } from '@ocloud/ui'
import { ImgTextProps } from '@/components/ImgText'
import CrouselItem from './crouselItem'
import useOperationButton from '../hooks/useOperationButton'
import ModuleTitle from '../ModuleTitle'
import styles from '../styles.module.less'
import ModuleBaseForm from '@/components/ImgText/ModuleBaseForm/moduleBaseForm'

type FigureTextCarouselFillProps = ImgTextProps & {
  title?: '上图下文板块填充式' | '上图下文板块平铺式'
}
const carouselInitValue = {
  altLabel: '',
  imgName: '',
  imgSort: 0,
  imgUrl: '',
  linkAddress: '',
  linkFlag: false,
  showButtonFlag: false,
  templateId: '',
  productText: [],
}
function FigureTextCarouselFill({
  title = '上图下文板块填充式',
  name,
  size,
  sort,
  onOperate,
  deviceType,
  applyType,
}: FigureTextCarouselFillProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const operationButton = useOperationButton(sort, size, onOperate)

  return (
    <div className={styles.moduleBorder}>
      <ORow gutter={20}>
        <OCol span={12}>
          <OForm.Item>
            <ModuleTitle title={title} />
            {operationButton}
          </OForm.Item>
        </OCol>
      </ORow>
      <ModuleBaseForm
        nameArr={nameArr}
        deviceType={deviceType}
        applyType={applyType}
      />
      <OForm.List name={[...nameArr, 'carouselList']}>
        {(fields, { add, remove }) => {
          return (
            <>
              <OButton type="primary" onClick={() => add(carouselInitValue)}>
                添加轮播
              </OButton>
              <OTabs>
                {fields.map(({ name, key }, index) => (
                  <OTabs.TabPane tab={`轮播${String(index + 1)}`} key={key}>
                    <OButton type="primary" danger onClick={() => remove(name)}>
                      删除
                    </OButton>
                    <CrouselItem name={name} />
                  </OTabs.TabPane>
                ))}
              </OTabs>
            </>
          )
        }}
      </OForm.List>
    </div>
  )
}

export default FigureTextCarouselFill
