import { Meta, StoryObj } from '@storybook/react';
import { useRandomId } from './useRandomId';
import { PropsWithChildren, useState } from 'react';

type DemoProps = {
    length: number;
};
const RenderingControls = ({
    children,
}: PropsWithChildren<Record<string, unknown>>) => {
    const [key, setKey] = useState(1);
    const [, setRerender] = useState(1);

    return (
        <div key={key}>
            {children}
            <hr />
            <div>
                <button
                    onClick={() => setRerender(x => x + 1)}
                >
                    Rerender Hook
                </button>
                <button onClick={() => setKey(x => x + 1)}>
                    Remount Hook
                </button>
            </div>
        </div>
    );
};
const Demo = ({ length }: DemoProps) => {
    const id = useRandomId(length);

    return (
        <pre>
            <code>id: {id}</code>
        </pre>
    );
};

const DemoWithControls = (props: DemoProps) => (
    <RenderingControls>
        <Demo {...props} />
    </RenderingControls>
);

const meta: Meta = {
    title: 'hooks/useRandomId',
    component: DemoWithControls,
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
} satisfies Meta<typeof DemoWithControls>;

export default meta;

// const Template: Story<DemoProps> = (args) => (
//     <Demo {...args} ></Demo>
// );
// export const Default = Template.bind({});
// Default.args = {};
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Length8: Story = {
  args: {
    length: 8
  },
};
