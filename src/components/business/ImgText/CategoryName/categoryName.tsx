import { OCol, OForm, ORow, ITextArea } from '@ocloud/ui'
import { ImgTextProps, NameType } from '..'
import useOperationButton from '../hooks/useOperationButton'
import ModuleTitle from '../ModuleTitle'
import styles from '../styles.module.less'
import { IMGTEXT_GAP } from '@/utils/constants'

function CategoryName({
  name = [],
  sort,
  size,
  onOperate,
  ...restField
}: ImgTextProps) {
  let nameArr = name as NameType
  if (!Array.isArray(name)) {
    nameArr = [name]
  }
  const operationButton = useOperationButton(sort, size, onOperate)
  return (
    <ORow gutter={IMGTEXT_GAP} className={styles.moduleBorder}>
      <OCol span={24}>
        <OForm.Item>
          <ModuleTitle title="分类名称" />
          {operationButton}
        </OForm.Item>
        <OForm.Item
          {...restField}
          name={[...nameArr, 'pcTextContent']}
          className="mb0"
        >
          <ITextArea />
        </OForm.Item>
      </OCol>
    </ORow>
  )
}

export default CategoryName
