import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-roboto-mono)"],
        grtskTera: ["var(--font-grtsktera)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        md: "8px",
      },
      spacing: {
        s: "5px",
        m: "10px",
        l: "15px",
      },
      colors: {
        primary: {
          brand: "#7AC80E",
          hover: "#8CE510",
        },
        border: {
          green: {
            70: "rgba(122, 200, 14, 0.70)",
            10: "rgba(122, 200, 14, 0.10)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
