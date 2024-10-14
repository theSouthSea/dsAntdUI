import { observer } from "mobx-react-lite"

import store from "../store"

const Hobby = () => {
  return (
    <div>
      {store.hobby.map((ele, index) => (
        <div key={index}>
          <span>{ele}</span>
          <button
            onClick={() => {
              store.removeHobby(index)
            }}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  )
}
export default observer(Hobby)
