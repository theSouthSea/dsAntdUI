import { ORow, OCol, OInput, OForm, OButton, OTabs } from '@ocloud/ui'
import ColorSelector from '@/components/ColorSelector'
import { FontFamilyColorSize, ImgTextProps } from '@/components/ImgText'
import CrouselItem from './crouselItem'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'
import { IMGTEXT_GAP } from '@/utils/constants'
import ModuleBaseForm from '../ModuleBaseForm'

const carouselInitValue = {
  altLabel: '',
  imgName: '',
  imgSort: 0,
  imgUrl: '',
  linkAddress: '',
  linkFlag: false,
  templateId: '',
  productText: [],
}
function MultigraphCarousel({
  // data,
  name,
  sort,
  size,
  onOperate,
  deviceType,
  applyType,
}: ImgTextProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const operationButton = useOperationButton(sort, size, onOperate)
  return (
    <ORow gutter={IMGTEXT_GAP} className={styles.moduleBorder}>
      <OCol span={12}>
        <OForm.Item>
          <ModuleTitle title="多图轮播" />
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
      </OCol>
      <OCol span={24}>
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
                      <OButton
                        type="primary"
                        danger
                        onClick={() => remove(name)}
                      >
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
      </OCol>
    </ORow>
  )
}

export default MultigraphCarousel
