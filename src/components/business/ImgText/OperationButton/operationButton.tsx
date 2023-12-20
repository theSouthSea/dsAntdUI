import { Button, Space } from "@base";
import { memo } from "react";

export type HiddenBtn = "up" | "down" | "delete" | "no";
export type ShowBtn = Exclude<HiddenBtn, "no">;
export type OperationButtonProps = {
  hiddenBtn?: HiddenBtn;
  onlyShowDeleteBtn?: boolean;
  onOperate: (type: ShowBtn) => void;
};
function OperationButton({
  hiddenBtn = "no",
  onlyShowDeleteBtn = false,
  onOperate,
}: OperationButtonProps) {
  return (
    <Space>
      {onlyShowDeleteBtn ? (
        <Button type="primary" danger onClick={() => onOperate("delete")}>
          删除
        </Button>
      ) : (
        <>
          {hiddenBtn !== "up" && (
            <Button type="primary" onClick={() => onOperate("up")}>
              上移
            </Button>
          )}
          {hiddenBtn !== "down" && (
            <Button onClick={() => onOperate("down")}>下移</Button>
          )}
          {hiddenBtn !== "delete" && (
            <Button type="primary" danger onClick={() => onOperate("delete")}>
              删除
            </Button>
          )}
        </>
      )}
    </Space>
  );
}
const MemoOperationButton = memo(OperationButton);
export default MemoOperationButton;
