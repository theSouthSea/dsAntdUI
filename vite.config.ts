import path from "node:path"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
// import babel from "vite-plugin-babel"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      babel: {
        // presets: [...],
        // Your plugins run before any built-in transform (eg: Fast Refresh)
        // plugins: [...],
        // Use .babelrc files
        babelrc: true,
        // Use babel.config.js files
        // configFile: true,
      },
    }),
  ],
  publicDir: "src/public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@base": path.resolve(__dirname, "src/components/base"),
      "@business": path.resolve(__dirname, "src/components/business"),
      "@ui": path.resolve(__dirname, "src/components/base/exportLib"),
    },
  },
})
