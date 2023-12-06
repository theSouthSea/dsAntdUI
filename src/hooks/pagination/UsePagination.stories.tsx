import { PropsWithChildren, useState } from 'react';
import { Meta, Story, StoryObj } from '@storybook/react';
import { usePagination } from './usePagination';

type DemoProps = {
    totalPages: number;
    initialPage: number;
    pageNumbersCount: number;
};

const RenderingControls = ({
    children,
}: PropsWithChildren<Record<string, unknown>>) => {
    const [key, setKey] = useState(1);
    const [,setRerender] = useState(1);

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

const Demo = ({
    totalPages,
    initialPage,
    pageNumbersCount,
}: DemoProps) => {
    const data = usePagination({
        totalPages,
        initialPage,
        pageNumbersCount,
    });

    return (
        <>
            <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
            <button
                onClick={() => data.setPreviousPageActive()}
            >
                setPreviousPageActive
            </button>
            <button
                onClick={() => data.setNextPageActive()}
            >
                setNextPageActive
            </button>
        </>
    );
};

const DemoWithControls = (props: DemoProps) => (
    <RenderingControls>
        <Demo {...props} />
    </RenderingControls>
);

const meta: Meta = {
    title: 'hooks/usePagination',
    component: DemoWithControls,
    argTypes: {
        totalPages: {
            control: {
                type: 'number',
            },
            defaultValue: 10,
        },
        initialPage: {
            control: {
                type: 'number',
            },
            defaultValue: 1,
        },
        pageNumbersCount: {
            control: {
                type: 'number',
            },
            defaultValue: 5,
        },
    },
    parameters: {
        controls: { expanded: true },
    },
} satisfies Meta<typeof DemoWithControls>;

export default meta;

// const Template: Story<DemoProps> = args => (
//     <DemoWithControls {...args} />
// );
// export const Default = Template.bind({});
// Default.args = {};
type Story = StoryObj<typeof meta>;
export const ActivePage2: Story = {
    args: {
        totalPages: 10,
        initialPage: 2,
        pageNumbersCount: 5,
    }
}