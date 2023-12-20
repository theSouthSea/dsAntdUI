import { Col, Form, Row } from "@ui";
import { TinyControlled } from "@/components/business/TinyComp";
import { ImgTextProps, NameType } from "..";
import useOperationButton from "../hooks/useOperationButton";
import ModuleTitle from "../ModuleTitle";
import styles from "../styles.module.less";
import { IMGTEXT_GAP } from "@/consts";
import ModuleBaseForm from "@business/ImgText/ModuleBaseForm/moduleBaseForm";

function RichText({
  name = [],
  sort,
  size,
  onOperate,
  deviceType,
  applyType,
  ...restField
}: ImgTextProps) {
  let nameArr = name as NameType;
  if (!Array.isArray(name)) {
    nameArr = [name];
  }
  const operationButton = useOperationButton(sort, size, onOperate);
  return (
    <Row gutter={IMGTEXT_GAP} className={styles.moduleBorder}>
      <Col span={24}>
        <Form.Item>
          <ModuleTitle title="富文本" />
          {operationButton}
        </Form.Item>
        <ModuleBaseForm
          nameArr={nameArr}
          deviceType={deviceType}
          applyType={applyType}
        />
        <Form.Item
          {...restField}
          name={[...nameArr, "description"]}
          className="mb0"
        >
          <TinyControlled />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default RichText;
