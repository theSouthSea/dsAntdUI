import { MenuProps, Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useModel, StoreProvider } from "./localeStore";

const Demo = () => {
  const { home, setLocale } = useModel("locales");
  const handleChangeLanguage = (val: IProjectLocale) => {
    setLocale(val);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="#"
          onClick={handleChangeLanguage.bind(this, "zhCN" as const)}
        >
          中文
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="#"
          onClick={handleChangeLanguage.bind(this, "enUS" as const)}
        >
          English
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <StoreProvider>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <div>{home}</div>
    </StoreProvider>
  );
};

export default Demo;
