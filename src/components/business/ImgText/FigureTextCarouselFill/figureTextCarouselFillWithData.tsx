import { useMemo, useState } from 'react'
import { ORow, OCol, OButton, OTabs, OForm } from '@ocloud/ui'
import { ICrouselItem, ImgTextProps } from '@/components/ImgText'
import CrouselItem from './crouselItem'
import useOperationButton from '../hooks/useOperationButton'
import ModuleTitle from '../ModuleTitle'
import styles from '../styles.module.less'

type FigureTextCarouselFillProps = ImgTextProps & {
  title?: '上图下文板块填充式' | '上图下文板块平铺式'
}
function FigureTextCarouselFill({
  title = '上图下文板块填充式',
  data,
  name,
  size,
  sort,
  onOperate,
}: FigureTextCarouselFillProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const [carouselList, setCarouselList] = useState<ICrouselItem[]>(
    data.carouselList || []
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
      key: item.id || String(index + 1),
      label: `轮播${index + 1}`,
      children: (
        <>
          <OButton type="primary" danger onClick={() => handleDelete(index)}>
            删除当前轮播
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
            <ModuleTitle title={title} />
            {operationButton}
          </OForm.Item>
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

export default FigureTextCarouselFill
