import { Button, Table } from "@base";
import { ColumnsType } from "antd/es/table";
import { memo } from "react";
import { SelectedModuleItem } from "./selectModuleDialog";
import styles from "./styles.module.less";

type SelectedModuleProps = {
  data: SelectedModuleItem[];
  onDelete: (idx: number) => void;
};
function SelectedModule({ data, onDelete }: SelectedModuleProps) {
  const columns: ColumnsType<SelectedModuleItem> = [
    {
      title: "序号",
      width: 60,
      render: (_, row, idx) => {
        return idx + 1;
      },
    },
    {
      dataIndex: "sectionTitle",
      title: "模块名称",
    },
    {
      title: "操作",
      width: 80,
      render: (_, row, idx) => {
        return (
          <Button type="link" onClick={() => onDelete(idx)} size="small">
            删除
          </Button>
        );
      },
    },
  ];
  return (
    <div className={styles.selctedModuleCon}>
      <div className={styles.tableTitle}>已选模块</div>
      <Table
        columns={columns}
        rowKey={(row) => row.key || row.id}
        dataSource={data}
        pagination={false}
        scroll={{ y: "580px" }}
      />
    </div>
  );
}

export default memo(SelectedModule);
