import { Meta, StoryObj } from "@storybook/react";
import { useThrottle } from "./useThrottle";
import {
  useState,
  MouseEvent,
  PointerEvent,
  useEffect,
  useCallback,
} from "react";
import { Button } from "antd";

interface Position {
  x: number;
  y: number;
}
const UsedDemo = () => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const handleScroll = function (event: PointerEvent) {
    console.log("x", event.clientX, "y", event.clientY);
    setPosition({ x: event.clientX, y: event.clientY });
  };
  const handleScollThrottle = useThrottle(handleScroll, 1000);
  useEffect(() => {
    document.addEventListener("mousemove", handleScollThrottle);
    return () => {
      document.removeEventListener("mousemove", handleScollThrottle);
    };
  }, []);
  return (
    <>
      <div>useThrottle节流用于防止scroll事件回调函数频繁触发</div>
      <div>
        鼠标的位置：x:{position.x},y:{position.y}
      </div>
    </>
  );
};
const UnusedDemo = () => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const handleScroll = function (event: any) {
    console.log("x", event.clientX, "y", event.clientY);
    setPosition({ x: event.clientX, y: event.clientY });
  };
  //   const handleScroll = useCallback((event: MouseEvent) => {
  //     console.log("x", event.clientX, "y", event.clientY);
  //     setPosition({ x: event.clientX, y: event.clientY });
  // }, [])
  useEffect(() => {
    window.addEventListener("mousemove", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleScroll);
    };
  }, []);
  return (
    <>
      <div>未使用UseThrottle的demo</div>
      <div>
        鼠标的位置：x:{position.x},y:{position.y}
      </div>
    </>
  );
};
const Example = ({ isUseThrottle }: { isUseThrottle: boolean }) => {
  const [isShowUsedDemo, setIsShowUsedDemo] = useState(isUseThrottle);
  return (
    <>
      {/* 是否使用节流 */}
      <Button onClick={() => setIsShowUsedDemo(!isShowUsedDemo)} type="primary">
        {isShowUsedDemo ? "不使用节流" : "使用节流"}
      </Button>
      {isShowUsedDemo ? <UsedDemo /> : <UnusedDemo />}
    </>
  );
};

const meta: Meta = {
  title: "hooks/useThrottle",
  component: Example,
  argTypes: {
    isUseThrottle: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;
export const HasUseThrottle: Story = {
  args: {
    isUseThrottle: true,
  },
};
export const NoUseThrottle: Story = {
  args: {
    isUseThrottle: false,
  },
};
