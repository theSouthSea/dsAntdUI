import { OButton, OCol, OForm, OInput, ORadio, ORow, OTabs } from '@ocloud/ui'
import ImgUpload from '@/components/ImgUpload'
import AllPositionSetting from '@/components/PositionSetting'
import { TinyControlled } from '@/components/TinyComp'
import { POSITION_INITVALUE } from '@/utils/constants'
import type { ProductText } from '../MultigraphCarousel'

export type CrouselItemProps = {
  name: (string | number)[] | (string | number)
}
export type CrouselItemTextProps = ProductText & {
  key: number
}
function CrouselItem({ name }: CrouselItemProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name]
  }
  return (
    <ORow gutter={20}>
      <OCol span={12}>
        <p>图片(尺寸1920*900px):</p>
        <OForm.Item>
          <OForm.Item name={[...nameArr, 'imgUrl']} noStyle>
            <ImgUpload />
          </OForm.Item>
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'altLabel']}>
          <OInput addonBefore="图片Alt" className="mb15" />
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'linkFlag']} label="是否跳转">
          <ORadio.Group>
            <ORadio value>是</ORadio>
            <ORadio value={false}>否</ORadio>
          </ORadio.Group>
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'linkAddress']}>
          <OInput addonBefore="跳转地址" />
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'showButtonFlag']} label="显示按钮">
          <ORadio.Group>
            <ORadio value>是</ORadio>
            <ORadio value={false}>否</ORadio>
          </ORadio.Group>
        </OForm.Item>
        <OForm.Item name={[...nameArr, 'buttonText']}>
          <OInput addonBefore="按钮名称" />
        </OForm.Item>
      </OCol>
      <OCol span={12}>
        <OForm.List name={[...nameArr, 'descriptionList']}>
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                <OButton type="primary" onClick={() => add(POSITION_INITVALUE)}>
                  添加文本
                </OButton>
                <OTabs>
                  {fields.map(({ name, key, ...restField }, index) => {
                    return (
                      <OTabs.TabPane tab={`文本${index + 1}`} key={key}>
                        <OButton
                          type="primary"
                          danger
                          onClick={() => remove(name)}
                        >
                          删除
                        </OButton>
                        <AllPositionSetting parentFieldName={name} />
                        <OForm.Item name={[name, 'description']}>
                          <TinyControlled />
                        </OForm.Item>
                      </OTabs.TabPane>
                    )
                  })}
                </OTabs>
              </>
            )
          }}
        </OForm.List>
      </OCol>
    </ORow>
  )
}

export default CrouselItem
