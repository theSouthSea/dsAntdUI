import CardCheckbox from "@/components/base/CardCheckbox"

import styles from "./index.module.less"

const checkboxList = [
  {
    id: 1,
    name: "examDirection",
    label: "定义理解",
    value: "define",
    checked: false,
  },
  {
    id: 2,
    name: "examDirection",
    label: "概念辨析",
    value: "discriminate",
    checked: false,
  },
  {
    id: 3,
    name: "examDirection",
    label: "场景应用",
    value: "application",
    checked: false,
  },
]
const CardCheckboxDemo = () => {
  return (
    <>
      <div>CardCheckboxDemo</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckbox
              key={item.id}
              id={String(item.id)}
              name={item.name}
              value={item.value}
              label={item.label}
            ></CardCheckbox>
          )
        })}
      </div>
      <div>页面上出现相同id的Checkbox会出现选不中的问题</div>
      <div className={styles.checkboxContainer}>
        {checkboxList.map((item) => {
          return (
            <CardCheckbox
              key={item.id}
              id={String(item.id)}
              name={item.name}
              value={item.value}
              label={item.label}
            ></CardCheckbox>
          )
        })}
      </div>
      {/* {
      checkboxList.map((item) => {
        return (
          <div key={item.id}>
            <input type="checkbox" id={item.id} name="examDirection" value={item.id} checked={item.checked} />
            <label htmlFor={item.id}>{item.title}</label>
          </div>
        )
      })
    } */}
    </>
  )
}
export default CardCheckboxDemo
