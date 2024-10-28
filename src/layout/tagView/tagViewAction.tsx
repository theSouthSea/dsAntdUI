import { SettingOutlined } from "@ant-design/icons"
import { Dropdown } from "antd"
import type { FC } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "@/store"
// import { LocaleFormatter } from '@/locales';
import { removeAllTag, removeOtherTag, removeTag } from "@/store/tags-view.store"

const TagsViewAction: FC = () => {
  const { activeTagId } = useSelector((state: RootState) => state.tagsView)
  const dispatch = useDispatch()

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            onClick: () => dispatch(removeTag(activeTagId)),
            // label: <LocaleFormatter id="tagsView.operation.closeCurrent" />,
            label: "关闭当前",
          },
          {
            key: "1",
            onClick: () => dispatch(removeOtherTag()),
            // label: <LocaleFormatter id="tagsView.operation.closeOther" />,
            label: "关闭其他",
          },
          {
            key: "2",
            onClick: () => dispatch(removeAllTag()),
            // label: <LocaleFormatter id="tagsView.operation.closeAll" />,
            label: "关闭所有",
          },
          {
            key: "3",
            type: "divider",
          },
          {
            key: "4",
            onClick: () => dispatch(removeOtherTag()),
            // label: <LocaleFormatter id="tagsView.operation.dashboard" />,
            label: "首页",
          },
        ],
      }}
    >
      <span id="pageTabs-actions">
        <SettingOutlined className="tagsView-extra" />
      </span>
    </Dropdown>
  )
}

export default TagsViewAction
