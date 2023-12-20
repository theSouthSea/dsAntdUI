import { useMemo, useState } from 'react'
import { ORow, OCol, OInput, OForm, OButton, OTabs, OSpace, ORadio } from '@ocloud/ui'
import ColorSelector from '@/components/ColorSelector'
import { FontFamilyColorSize, ImgTextProps } from '@/components/ImgText'
import CrouselItem from './crouselItem'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'
import { ICrouselItem } from '.'

export type MultigraphCarouselWithDataProps = ImgTextProps & {
  data: ICrouselItem[]
  sort: number
}
function MultigraphCarousel({
  data,
  name,
  sort,
  size,
  onOperate,
}: MultigraphCarouselWithDataProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const [carouselList, setCarouselList] = useState<ICrouselItem[]>(
    data?.carouselList || []
  )
  const handleAddCrousel = () => {
    setCarouselList([
      ...carouselList,
      {
        altLabel: '',
        imgName: '',
        imgSort: 0,
        imgUrl: '',
        linkAddress: '',
        linkFlag: false,
        templateId: '',
        productText: [],
      },
    ])
  }
  const tabsItems = useMemo(() => {
    const handleDelete = (index: number) => {
      const curList = carouselList.splice(index, 1)
      setCarouselList([...curList])
    }
    return carouselList.map((item, index) => ({
      key: item.id || index,
      label: `轮播${index + 1}`,
      children: (
        <>
          <OButton type="primary" danger onClick={() => handleDelete(index)}>
            删除
          </OButton>
          <CrouselItem name={[...nameArr, 'carouselList', index]} />
        </>
      ),
    }))
  }, [carouselList])
  const operationButton = useOperationButton(sort, size, onOperate)

  return (
    <div className={styles.moduleBorder}>
      <ORow gutter={20}>
        <OCol span={12}>
          <OForm.Item>
            <ModuleTitle title="多图轮播" />
            {operationButton}
          </OForm.Item>
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
          <OButton type="primary" onClick={handleAddCrousel}>
            添加轮播
          </OButton>
        </OCol>
      </ORow>
      {carouselList.length ? (
        <OTabs defaultActiveKey="1" items={tabsItems} />
      ) : null}
    </div>
  )
}

export default MultigraphCarousel
