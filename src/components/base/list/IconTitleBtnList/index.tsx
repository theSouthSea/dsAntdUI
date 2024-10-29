import { Empty } from "antd"

import IconTitleBtn, { IconTitleBtnItem } from "../IconTitleBtn"
import styles from "./index.module.less"

interface IconTitleBtnListProps {
  list: IconTitleBtnItem[]
}
const IconTitleBtnList = (props: IconTitleBtnListProps) => {
  const { list } = props
  return (
    <div className={styles.container}>
      {list?.length > 0 ? (
        list.map((item) => {
          return (
            <IconTitleBtn
              key={item.title}
              title={item.title}
              icon={item.icon}
              id={item.id}
            ></IconTitleBtn>
          )
        })
      ) : (
        <Empty></Empty>
      )}
    </div>
  )
}
export default IconTitleBtnList
