import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1024px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
