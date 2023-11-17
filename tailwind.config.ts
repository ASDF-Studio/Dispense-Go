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
      lineHeight: {
        2.5: "10px",
        "120%": "15.6px",
      },
      colors: {
        primary: {
          brand: "#7AC80E",
          hover: "#8CE510",
          green: "#008254",
        },
        background: {
          red: {
            95: "rgba(248, 236, 238, 0.95)",
          },
          green: {
            20: "rgba(122, 200, 14, 0.20)",
          },
          purple: "rgba(102, 17, 211)",
          blue: "#11A4D3",
          grey: "rgba(39, 39, 39, 0.08)",
          brown: "#D36E11",
        },
        text: {
          black: {
            70: "rgba(14, 14, 14, 0.70)",
            100: "#161515",
          },
          blueShade: "#E7F8FD",
          green: "#0F6422",
          red: "#E9495C",
          lightPink: "#F1E7FD",
          purple: "#6611D3",
        },
        border: {
          whiteSmoke: "#EFF5F3",
          purple: "#6611D3",
          green: {
            70: "rgba(122, 200, 14, 0.70)",
            10: "rgba(122, 200, 14, 0.10)",
          },
        },
      },
      boxShadow: {
        "product-card": "0px 4px 23px 0px rgba(236, 234, 234, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
