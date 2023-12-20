import { Form, Switch } from "@base";

export interface ModuleBaseFormProps {
  nameArr: (string | number)[];
  deviceType?: string;
  /** 应用类型 */
  applyType?: ImgTextForm;
}

/**
 * 模块基础表单
 */
export default function ModuleBaseForm(props: ModuleBaseFormProps) {
  const { nameArr, deviceType, applyType = "product" } = props;

  return (
    <>
      {deviceType === "pc" && applyType === "product" && (
        <Form.Item
          name={[...nameArr, "dynamicEffectFlag"]}
          valuePropName="checked"
          label="是否开启动态效果"
        >
          <Switch />
        </Form.Item>
      )}
    </>
  );
}
