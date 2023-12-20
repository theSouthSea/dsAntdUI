import { createContext, useContext, useState } from "react";

const GlobalLayoutContext = createContext<IGlobalLayout>({
  // 是否显示菜单
  showMenu: true,
  // 是否显示菜单栏
  showMenuBar: true,
  // 是否显示侧边栏
  showSideBar: true,
  // 是否显示顶部栏
  //   showTopBar: true,
  // 是否显示底部栏
  //   showBottomBar: true,
  // 是否显示全屏按钮
  //   showFullScreen: true,
  // 是否显示导航栏
  showNavBar: true,
  // 是否显示页脚
  showFooter: true,
  // 是否显示搜索框
  showSearch: true,
  // 是否显示面包屑
  showBreadcrumb: true,
});

export const GlobalLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [globalConfig, setGlobalLayout] = useState<IGlobalLayout>({
    // 是否显示菜单
    showMenu: true,
    // 是否显示菜单栏
    showMenuBar: true,
    // 是否显示侧边栏
    showSideBar: true,
    // 是否显示导航栏
    showNavBar: true,
    // 是否显示页脚
    showFooter: true,
    // 是否显示搜索框
    showSearch: true,
    // 是否显示面包屑
    showBreadcrumb: true,
    // 是否显示面包屑图标
  });

  return (
    <GlobalLayoutContext.Provider value={globalConfig}>
      {children}
    </GlobalLayoutContext.Provider>
  );
};

export const useGlobalLayout = () => {
  return useContext(GlobalLayoutContext);
};

export interface IGlobalLayout {
  // 是否显示菜单
  showMenu: boolean;
  // 是否显示菜单栏
  showMenuBar: boolean;
  // 是否显示侧边栏
  showSideBar: boolean;
  // 是否显示导航栏
  showNavBar: boolean;
  // 是否显示页脚
  showFooter: boolean;
  // 是否显示搜索框
  showSearch: boolean;
  // 是否显示面包屑
  showBreadcrumb: boolean;
}
