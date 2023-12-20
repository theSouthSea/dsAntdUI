import type { Meta, StoryObj } from "@storybook/react"

import SelectModuleDialog, { SelectedModuleItem } from "./selectModuleDialog"
import { Button } from "antd"
import { useState } from "react"
interface DemoProps {
  deviceType: "pc" | "mobile" | "classification"
}
const Demo = ({ deviceType }: DemoProps) => {
  const [open, setOpen] = useState(false)
  const handleToggleDialog = () => {
    setOpen(!open)
  }
  const handleDataChange = (data: SelectedModuleItem[]) => {
    console.log(data)
  }
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    console.log(isOpen)
  }
  return (
    <>
      <Button onClick={handleToggleDialog}>{open ? "关闭模块选择器" : "打开模块选择器"}</Button>
      <SelectModuleDialog
        open={open}
        onOpenChange={handleOpenChange}
        isProductPage
        //   data=SelectedModuleItem[]
        type={deviceType}
        onDataChange={handleDataChange}
      />
    </>
  )
}
const meta = {
  title: "components/business/SelectModuleDialog",
  component: Demo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    deviceType: { control: "radio", options: ["pc", "mobile"] },
  },
} satisfies Meta<typeof Demo>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SelectModuleDialogPC: Story = {
  args: {
    deviceType: "pc",
  },
}

export const SelectModuleDialogMobile: Story = {
  args: {
    deviceType: "mobile",
  },
}
export const SelectModuleDialogClassfication: Story = {
  args: {
    deviceType: "classification",
  },
}
