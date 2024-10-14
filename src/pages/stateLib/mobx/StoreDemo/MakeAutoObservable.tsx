import { observer } from "mobx-react-lite"

import styles from "./index.module.less"
// import store from "./store"
import store from "./store-makeAutoObservable"

const MobxStoreDemo = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <span>{store.name}信息表</span>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.input}>
            <input
              type="text"
              value={store.slogan}
              onChange={(ev) => {
                store.slogan = ev.target.value
              }}
            />
          </div>
          <div className={styles.list}>
            {store.sports.map((ele, index) => (
              <div key={index} className={styles.item}>
                <span>{ele}</span>
                <button
                  onClick={() => {
                    store.removeItem(index)
                  }}
                >
                  删除
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.input}>
            <input
              type="text"
              value={store.inputTodo}
              onChange={(ev) => {
                store.inputTodo = ev.target.value
              }}
            />
          </div>
          <button
            onClick={() => {
              store.addItem()
            }}
          >
            添加
          </button>
        </div>
        <div className={styles.todo}>
          {store.todos.map((ele, index) => (
            <div key={index} className={styles.item}>
              <span>{ele}</span>
              <button
                onClick={() => {
                  store.removeTodo(index)
                }}
              >
                删除
              </button>
            </div>
          ))}
        </div>
        {/* <Hobby></Hobby> */}
        <div>爱好：{store.hobby.join(",")}</div>
      </div>
    </div>
  )
}
export default observer(MobxStoreDemo)
