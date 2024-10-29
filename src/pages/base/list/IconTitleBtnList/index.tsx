import { LogoutOutlined, UserOutlined } from "@ant-design/icons"

import IconTitleBtnList from "@/components/base/list/IconTitleBtnList"

import styles from "./index.module.less"

const list = [
  {
    icon: <UserOutlined />,
    title: "个人信息",
    id: 1,
  },
  {
    icon: <LogoutOutlined />,
    title: "退出",
    id: 2,
  },
  {
    icon: <UserOutlined />,
    title: "个人信息",
    id: 3,
  },
]
const IconTitleBtnListDemo = () => {
  return (
    <div className={styles.card}>
      <IconTitleBtnList list={list}></IconTitleBtnList>
    </div>
  )
}
export default IconTitleBtnListDemo
