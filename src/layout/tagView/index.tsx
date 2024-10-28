import { Tabs } from "antd"
import type { FC } from "react"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { RootState } from "@/store"
import { addTag, removeTag, setActiveTag } from "@/store/tags-view.store"

import TagsViewAction from "./tagViewAction"

const TagsView: FC = () => {
  const { tags, activeTagId } = useSelector((state: RootState) => state.tagsView)
  const { menuList } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const location = useLocation()

  // onClick tag
  const onChange = (key: string) => {
    const tag = tags.find((tag) => tag.path === key)

    if (tag) {
      setCurrentTag(tag.path)
    }
  }

  // onRemove tag
  const onClose = (targetKey: string) => {
    dispatch(removeTag(targetKey))
  }

  const setCurrentTag = useCallback(
    (id?: string) => {
      const tag = tags.find((item) => {
        if (id) {
          return item.path === id
        } else {
          return item.path === location.pathname
        }
      })

      if (tag) {
        dispatch(setActiveTag(tag.path))
      }
    },
    [dispatch, location.pathname, tags],
  )

  useEffect(() => {
    if (menuList.length) {
      const menu = menuList.find((m) => m.path === location.pathname)

      if (menu) {
        dispatch(
          addTag({
            ...menu,
            closable: menu.path !== "/dashboard",
          }),
        )
      }
    }
  }, [dispatch, location.pathname, menuList])

  return (
    <div id="pageTabs" style={{ padding: "6px 4px" }}>
      <Tabs
        tabBarStyle={{ margin: 0 }}
        onChange={onChange}
        activeKey={activeTagId}
        type="editable-card"
        size="small"
        hideAdd
        onEdit={(targetKey, action) => action === "remove" && onClose(targetKey as string)}
        tabBarExtraContent={<TagsViewAction />}
        items={tags.map((tag) => {
          return {
            key: tag.path,
            closable: tag.closable,
            // label: tag.label[locale],
            label: tag.label,
          }
        })}
      />
    </div>
  )
}

export default TagsView
