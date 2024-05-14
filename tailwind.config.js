/** @type {import('tailwindcss').Config} */
// 默认
// export default {
//   content: ["./index.html", "./src/**/*.{tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const baseConfig = require("@magister_zito/prettier-config")

module.exports = {
  ...baseConfig,
  content: ["./index.html", "./src/**/*.tsx"],
  plugins: ["prettier-plugin-tailwindcss"],
}
