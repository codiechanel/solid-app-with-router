// import { defineConfig } from "vite-plugin-windicss";

// export default defineConfig({
 module.exports = {
  mode: "jit",

  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    /*options: {
      safelist: [/data-theme$/],
    },*/
  },

  darkMode: false,
  theme: {
    extend: {},
  },
}
