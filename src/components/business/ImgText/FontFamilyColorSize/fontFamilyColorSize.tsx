import { OForm, OSelect, OSpace } from '@ocloud/ui'
import React, { memo } from 'react'
import ColorSelector from '@/components/ColorSelector'
import { fontFamilyOptions, fontSizeOptions } from '@/utils/constants'

const { Option } = OSelect

function FontFamilyColorSize({ name }: { name: (string | number)[] }) {
  return (
    <OForm.Item>
      <OSpace>
        <OForm.Item
          name={[...name, 'titleColor']}
          valuePropName="color"
          noStyle
        >
          <ColorSelector />
        </OForm.Item>
        <OForm.Item name={[...name, 'titleFont']} noStyle>
          <OSelect style={{ width: '200px' }}>
            {fontFamilyOptions.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </OSelect>
        </OForm.Item>
        <OForm.Item name={[...name, 'titleFontSize']} noStyle>
          <OSelect>
            {fontSizeOptions.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </OSelect>
        </OForm.Item>
      </OSpace>
    </OForm.Item>
  )
}

export default memo(FontFamilyColorSize, (prevProps, nextProps) => {
  return prevProps.name.toString() === nextProps.name.toString()
})
