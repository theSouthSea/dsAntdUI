import { createContext, useContext, useState } from "react";

const GlobalConfigContext = createContext<IGlobalConfig>({
  uploadPath: "",
  apiKey: "",
});
export const GlobalConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [globalConfig, setGlobalConfig] = useState<IGlobalConfig>({
    uploadPath: "",
    apiKey: "puubbn828dxfrj8h52bvwuuztow4xphn6u91zx41qh3o473r",
  });
  //

  return (
    <GlobalConfigContext.Provider value={globalConfig}>{children}</GlobalConfigContext.Provider>
  );
};

export const useGlobalConfig = () => {
  return useContext(GlobalConfigContext);
};

export interface IGlobalConfig {
  uploadPath: string;
  apiKey: string;
}
