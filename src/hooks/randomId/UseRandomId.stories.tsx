import { Meta, StoryObj } from '@storybook/react';
import { useRandomId } from './useRandomId';

type DemoProps = {
    length: number;
};

const Demo = ({ length }: DemoProps) => {
    const id = useRandomId(length);

    return (
        <pre>
            <code>id: {id}</code>
        </pre>
    );
};

const meta: Meta = {
    title: 'hooks/useRandomId',
    component: Demo,
    argTypes: {
        length: {
            control: {
                type: 'number',
            },
            defaultValue: 10,
        },
    },
    parameters: {
        controls: { expanded: true },
    },
} satisfies Meta<typeof Demo>;

export default meta;

// const Template: Story<DemoProps> = (args) => (
//     <Demo {...args} ></Demo>
// );
// export const Default = Template.bind({});
// Default.args = {};
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Length6: Story = {
  args: {
    length: 6
  },
};
