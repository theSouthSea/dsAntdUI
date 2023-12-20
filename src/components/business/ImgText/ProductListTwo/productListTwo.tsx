import React, { useState, useContext, useEffect } from 'react'
import {
  ORow,
  OCol,
  OSpace,
  OButton,
  OTable,
  OInputNumber,
  OForm,
  OMessage,
} from '@ocloud/ui'
import type { FormInstance } from '@ocloud/ui'
import { isArray } from 'lodash'
import AddGoodsPopupPlus from '@/components/AddGoodsPopupPlus'
import { ImgTextProps } from '..'
import ModuleTitle from '../ModuleTitle'
import useOperationButton from '../hooks/useOperationButton'
import styles from '../styles.module.less'

type EditableTableProps = Parameters<typeof OTable>[0]

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>

const EditableContext = React.createContext<FormInstance<any> | null>(null)

const EditableRow: React.FC = ({ ...props }) => {
  const [form] = OForm.useForm()
  return (
    <OForm form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </OForm>
  )
}

const EditableCell: React.FC<any> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  ...restProps
}) => {
  const form = useContext(EditableContext)!
  const handleSave = async () => {
    const values = await form.validateFields()
    form.setFieldsValue({ ...values })
  }
  let childNode = children
  if (editable) {
    childNode = (
      <OForm.Item
        name={dataIndex}
        style={{ margin: 0 }}
        initialValue={record[dataIndex]}
        rules={[
          {
            required: true,
            message: `${title} 必填`,
          },
        ]}
      >
        <OInputNumber
          min={0}
          max={99999}
          maxLength={5}
          precision={0}
          onBlur={handleSave}
        />
      </OForm.Item>
    )
  }
  return <td {...restProps}>{childNode}</td>
}

export type ProductListTwoProps = ImgTextProps & {
  title?: string
}
function ProductListTwo({
  title = '双列商品',
  form,
  name,
  sort,
  size,
  onOperate,
}: ProductListTwoProps) {
  let nameArr = name as (string | number)[]
  if (!Array.isArray(name)) {
    nameArr = [name!]
  }
  const operationButton = useOperationButton(sort, size, onOperate)

  // 商品选择弹窗显示
  const [isShow, setIsShow] = useState<boolean>(false)
  // 商品，表格数据
  const [tableData, setTableData] = useState<any>()

  // 获取商品弹窗数据
  const getGoodsData = (val: any[]) => {
    if (isArray(val)) {
      // 表格数据存在的ID
      const existIds = tableData.map(
        (item: { productId: string }) => item.productId
      )
      // 过滤存在的ID
      const effectiveIdsData = val.filter((item) => !existIds.includes(item.id))
      const newData = effectiveIdsData.map((item) => {
        return {
          productId: item.id,
          sku: item.sku,
          refId: null,
          enabled: item.enabled,
          name: item.nameLang1,
        }
      })
      setTableData([...tableData, ...newData])
    }
  }

  // 商品添加
  const addProduct = () => {
    if (tableData.length > 1) {
      OMessage.error('此模块最多只能添加两个商品，请删除商品再添加新的商品')
      return
    }
    setIsShow(true)
  }

  // 商品删除
  const handleDelete = (productId: string) => {
    const ids = productId.split(',')
    const newList = tableData.filter(
      (item: { productId: string }) => !ids.includes(item.productId)
    )
    setTableData(newList)
  }

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean
    dataIndex: string
  })[] = [
    {
      title: '商品名称',
      dataIndex: 'name',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
    },
    {
      title: '状态',
      dataIndex: 'enabled',
      render: (enabled: boolean) => {
        return <span>{enabled ? '已上架' : '已下架'}</span>
      },
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_: string, row: any) => {
        return (
          <OButton type="link" onClick={() => handleDelete(row.productId)}>
            删除
          </OButton>
        )
      },
    },
  ]

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  }

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    }
  })

  useEffect(() => {
    // 商品变化的时候进来
    if (tableData) {
      const productDescriptionArr =
        form?.getFieldsValue(true)?.productDescriptionArr
      productDescriptionArr.forEach((item: any, index: any) => {
        if (index === nameArr[0]) {
          item.productSkuList = tableData
        }
      })
      form?.setFieldValue('productDescriptionArr', productDescriptionArr)
    } else {
      // 初始化的时候进来,tableData为undefined
      const editTableData =
        form?.getFieldValue('productDescriptionArr')[nameArr[0]]
          ?.productSkuList || []
      const newEditTableData = editTableData.map((item: any) => {
        return {
          productId: item.productId,
          sku: item.sku,
          refId: null,
          enabled: item.status,
          name: item.productName || item.name,
        }
      })
      setTableData([...newEditTableData])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableData])

  return (
    <>
      <ORow gutter={20} className={styles.moduleBorder}>
        <OCol span={24}>
          <OForm.Item>
            <ModuleTitle title={title} />
            {operationButton}
          </OForm.Item>
          <OForm.Item>
            <OSpace wrap>
              <OButton type="primary" onClick={addProduct}>
                添加商品
              </OButton>
            </OSpace>
            <OTable
              style={{ marginTop: 16 }}
              components={components}
              columns={columns as ColumnTypes}
              rowKey={(record: any) => record.productId}
              dataSource={tableData}
              pagination={false}
            />
          </OForm.Item>
        </OCol>
      </ORow>
      <OForm.Item>
        <AddGoodsPopupPlus
          maxLength={2}
          isFormOnForm
          isShow={isShow}
          selectedIds={tableData?.map(
            (item: { productId: any }) => item.productId
          )}
          popupWidth={1000}
          isHandleClose
          closeFn={setIsShow}
          getChildrenMsg={getGoodsData}
        />
      </OForm.Item>
    </>
  )
}

export default ProductListTwo
