import { Meta, StoryObj } from "@storybook/react";
import {useDebounce} from './useDebounce'
import { useState } from "react";
import { debounce } from "lodash-es";
import { sleep } from "@/utils";
interface DemoProps {
    hasUseDebounce: boolean
}
const Demo = ({hasUseDebounce}:DemoProps) => {
    const [keyword,setKeyWord] = useState('');
    const [data, setData] = useState<any[]>([]);
    const handleRequestClick = async () => {
        console.log('请求成功')
        await sleep(1000);
        setData([
            {
                title: 'react '+keyword,
                description: 'react description',
                url: '/react.html'
            },
            {
                title: 'vue '+keyword,
                description: 'vue description',
                url: '/vue.html'
            },
            {
                title: 'angular '+keyword,
                description: 'angular description',
                url: '/angular.html'
            }
        ])
    }
    const debounceRequest = useDebounce(handleRequestClick, 500)
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!hasUseDebounce){
            const debounceFn = debounce(handleRequestClick,500)
            debounceFn()
        }else{
            debounceRequest()
        }
        setKeyWord(e.target.value)
    }
    // const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setKeyWord(e.target.value)
    //     handleRequestClick()
    // }
    // if(!hasUseDebounce){
    //     handleValueChange = debounce(handleKeywordChange,500)
    // }
    return (
        <>
        <p>搜索-使用useDebounce防抖</p>
        <input type="text" value={keyword} onChange={handleValueChange} />
        <p>搜索结果</p>
        <ol>
        {
            data.map((item) => (<li key={item.url}>{item.title}</li>))
        }
        </ol>
        </>
    )

}
const meta: Meta = {
    title: 'hooks/useDebounce',
    component: Demo,
    argTypes: {
        hasUseDebounce: {
            control: {
                type: 'boolean',
            },
            defaultValue: true,
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
export const HasUseDebounce: Story = {
    args: {
        hasUseDebounce: true,
    }
}
export const NoUseDebounce: Story = {
    args: {
        hasUseDebounce: false,
    }
}