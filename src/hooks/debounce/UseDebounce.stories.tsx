import { Meta, StoryObj } from "@storybook/react";
import {usePreviousPersistentWithMatcher} from './usePreview'
import { useState } from "react";
interface DemoProps {
    initCount: number
}
const Demo = ({initCount}:DemoProps) => {
    const [count, setCount] = useState(initCount);
    const prevCount = usePreviousPersistentWithMatcher(count,(a,b)=>a===b)
    const handleAddClick = () => {
        setCount(count + 1)
    }
    const handleMinusClick = () => {
        setCount(count - 1)
    }
    return (
        <>
        <div>前一个值: {prevCount}</div>
        <div>当前值:{count}</div>
        <button onClick={handleAddClick}>+</button>
        <button onClick={handleMinusClick}>-</button>
        </>
    )

}
const meta: Meta = {
    title: 'hooks/usePreview',
    component: Demo,
    argTypes: {
        initCount: {
            control: {
                type: 'number',
            },
            defaultValue: 0,
        },
        
    },
    parameters: {
        controls: { expanded: true },
    },
} satisfies Meta<typeof Demo>;

export default meta;

// const Template: Story<DemoProps> = args => (
//     <DemoWithControls {...args} />
// );
// export const Default = Template.bind({});
// Default.args = {};
type Story = StoryObj<typeof meta>;
export const InitCount0: Story = {
    args: {
        initCount: 0,
    }
}