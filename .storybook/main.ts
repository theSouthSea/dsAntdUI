import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: [
    "../src/stories/*.mdx",
    "../src/components/**/*.mdx",
    "../src/hooks/**/*.mdx",
    "../src/stories/*.stories.@(ts|tsx)",
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/hooks/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // 现在是webpack构建
  // 要改成使用vite,需要进行下面的配置
  // 来源: https://storybook.js.org/docs/builders/vite
  // core: {
  //   builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  // },
  docs: {
    autodocs: "tag",
  },
}
export default config
