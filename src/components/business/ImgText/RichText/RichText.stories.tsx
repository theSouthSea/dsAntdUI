import type { Meta, StoryObj } from "@storybook/react";

import RichText from "./richText";
import { Button, Form } from "antd";
interface DemoProps {
  deviceType: "pc" | "mobile";
}
const Demo = ({ deviceType }: DemoProps) => {
  const handleOperate = (e: any) => {
    console.log(e);
  };
  // const form = Form.useForm();
  // const handleSubmit = () => {
  //     form.validateFields().then((values) => {
  //         console.log(values);
  //     });
  // }
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <RichText
        name="richtext"
        sort={1}
        size={2}
        onOperate={handleOperate}
        deviceType={deviceType}
        applyType="product"
      />
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
const meta = {
  title: "components/business/RichText",
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
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RichTextPC: Story = {
  args: {
    deviceType: "pc",
  },
};

export const RichTextMobile: Story = {
  args: {
    deviceType: "mobile",
  },
};
