import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:
    ["min-h-screen", "flex", "flex-col", "justify-center", "items-center", "bg-foreground-color", "min-h-full", "w-full", "grow", "p-9", "px-28", "mb-6", "mb-12", "min-h-box"
      ,"mb-auto", "mt-auto","w-10","w-11","w-12"]
  ,
  theme: {
    extend: {
      fontSize: {
        "h1": "2.5rem"
      },
      lineHeight: {
        "h1": "2.5rem"
      },
      width: {
        'input': '29rem',
      },
      minHeight: {
        'box': '43.75rem'
      },
      colors: {
        "foreground-primary-color": "#1f1d0d",
        "foreground-secondary-color": "#ffffff",
        "background-primary-color": "#e1e1e1",
        "background-secondary-color": "#ffe300",
        "box-background-color": "#ffffff",
      },
    }

  },
  plugins: [],
};
export default config;
