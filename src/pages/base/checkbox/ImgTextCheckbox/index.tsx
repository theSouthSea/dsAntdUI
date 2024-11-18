import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons"
import Section from "@business/Section"

import ImgTextCheckboxOpt from "@/components/base/ImgTextCheckbox"
import ImgTextCheckbox from "@/components/base/ImgTextCheckbox/origin"

import { examDirectionList } from "../data"
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
      <ImgTextCheckboxOpt
        // id="manyAnswer"
        name="multipleChoice"
        value="manyAnswer"
        label="多选题"
        icon={<LoadingOutlined />}
      ></ImgTextCheckboxOpt>
    </div>
  )
}
export default ImgTextCheckboxDemo
