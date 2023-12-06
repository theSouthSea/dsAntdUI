import type { Meta, StoryObj } from '@storybook/react';

import { ErrorBoundary, useCallbackWithErrorHandling, useThrowAsyncError } from './AsyncErorrBoundary';

const ComponentWithAsyncThrower = () => {
    const throwAsyncError = useThrowAsyncError()
  
    const onClick = () => {
      try {
        throw new Error('break things')
      } catch (e) {
        throwAsyncError(e)
      }
    }
  
    return <button onClick={onClick}>click me to cause an error</button>
  }
  
  const ComponentWithErrorHandler = () => {
    const onClick = () => {
      throw new Error('break things')
    }
  
    const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick)
  
    return <button onClick={onClickWithErrorHandler}>click me to cause an error</button>
  }
  interface DemoProps {
    Fallback: JSX.Element
  }
  function Demo({Fallback}:DemoProps) {
    return (
      <div className="App">
        <h1>ErrorBoundary with async errors</h1>
        <p>click on a button to trigger state update and as a result - error</p>
        <p>
          <b>Ignore</b> and close error overlay - it&apos;s just in dev mode and can&apos;t be removed
        </p>
        <ErrorBoundary fallback={Fallback}>
          <ComponentWithAsyncThrower />
          <ComponentWithErrorHandler />
        </ErrorBoundary>
      </div>
    )
  }
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/base/AsyncErrorBoundary',
  component: Demo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    Fallback: { control: 'text' },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    Fallback: <>Something happened!</>
  },
};