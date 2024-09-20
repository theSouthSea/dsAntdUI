import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons"

import ImgTextCheckbox from "@/components/base/ImgTextCheckbox"

import styles from "./index.module.less"

const ImgTextCheckboxDemo = () => {
  return (
    <div className={styles.checkboxBox}>
      <ImgTextCheckbox
        id="oneAnswer"
        name="multipleChoice"
        value="oneAnswer"
        label="单选题"
        icon={<HomeOutlined></HomeOutlined>}
      ></ImgTextCheckbox>
      <ImgTextCheckbox
        id="manyAnswer"
        name="multipleChoice"
        value="manyAnswer"
        label="多选题"
        icon={<LoadingOutlined />}
      ></ImgTextCheckbox>
    </div>
  )
}
export default ImgTextCheckboxDemo
