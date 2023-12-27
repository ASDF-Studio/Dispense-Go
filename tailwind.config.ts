import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // xs: "420px",
        s: "380px",
        m: "767px",
        x: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        "screen-2xl": "1440px",
        "screen-margin": "1127px",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-roboto-mono)"],
        grtskTera: ["var(--font-grtsktera)"],
      },
      margin: {
        desktop: "42px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        md: "8px",
      },
      padding: {
        tablet: "24px",
        desktop: "42px",
        mobile: "20px",
      },
      spacing: {
        s: "5px",
        m: "10px",
        l: "15px",
        xl: "60px",
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
          darkGreen: "#033D28",
          black: "#161515",
          modal: "#043E29",
        },
        background: {
          red: {
            95: "rgba(248, 236, 238, 0.95)",
          },
          green: {
            20: "rgba(122, 200, 14, 0.20)",
            8: "rgba(122, 200, 14, 0.08)",
          },
          whiteS: "#F9F9F9",
          whiteGrey: "rgba(242, 242, 242, 0.40)",
          darkGreen: "#0B724E",
          lightGreen: "#E9FAD2",
          purple: "rgba(102, 17, 211)",
          green1: "#1AA977",
          blue: "#11A4D3",
          grey: "rgba(39, 39, 39, 0.08)",
          brown: "#D36E11",
          primary: "#D1F89B",
          tagGreen: "#006340",
          opacity: "#D8E2C9",
        },
        gradient: {
          linear: {
            green: "linear-gradient(98deg, #7AC80E 24.29%, #0B724E 122.44%)",
          },
          green: "#093911",
          purple: "#441520",
          maroon: "#392009",
        },
        text: {
          black: {
            10: "rgba(14, 14, 14, 0.10)",
            20: "rgba(16, 16, 16, 0.20)",
            40: "rgba(14, 14, 14, 0.40)",
            70: "rgba(14, 14, 14, 0.70)",
            100: "#161515",
          },
          white: {
            70: "rgba(255, 255, 255, 0.70)",
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
        hover: {
          lightGreen: "#C2F486",
        },
      },
      boxShadow: {
        "product-card": "0px 4px 23px 0px rgba(236, 234, 234, 0.25)",
        navbar: "0px 13px 45px 0px rgba(21, 55, 0, 0.07)",
        "category-card": "0px 13px 45px 0px rgba(21, 55, 0, 0.07)",
        menu: "0px 13px 45px 0px rgba(21, 55, 0, 0.07)",
        brand: "0px 4px 23px 0px rgba(236, 234, 234, 0.25)",
        "cart-item": "0px 2.443px 14.05px 0px rgba(236, 234, 234, 0.25)",
        modal: "0px 4px 23px 0px rgba(13, 49, 36, 0.10)",
        order: "-3px 12px 26px 0px rgba(0, 28, 18, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
