import { useCallback, useMemo } from 'react'
import OperationButton, { HiddenBtn, ShowBtn } from '../OperationButton'


export default function usePaginationButton(
  sort: number,
  size: number,
  onOperate: (type: ShowBtn, sort: number) => void
) {
  const handleOperate = useCallback(
    (type: ShowBtn) => {
      console.log('handleOperate', type, sort)
      onOperate(type, sort)
    },
    [sort]
  )
  const endIndex = size - 1
  const hiddenBtnVal: HiddenBtn = useMemo(() => {
    let val = 'no'
    // size === 1时,由onlyShowDeleteBtn控制仅显示删除按钮
    if (size !== 1) {
      if (sort === 0) {
        // 第一个,显示下移/删除按钮,隐藏上移按钮
        val = 'up'
      } else if (sort < endIndex) {
        // 中间的,不隐藏按钮,显示全部按钮
        val = 'no'
      } else {
        // 最后一个,隐藏下移按钮
        val = 'down'
      }
    }
    return val as HiddenBtn
  }, [sort, size])

  const operationButton = useMemo(
    () => (
      <OperationButton
        onlyShowDeleteBtn={endIndex === 0}
        hiddenBtn={hiddenBtnVal}
        onOperate={handleOperate}
      />
    ),
    [endIndex, hiddenBtnVal]
  )
  return operationButton
}
