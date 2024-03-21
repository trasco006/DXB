/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    screens: {
      sm: "480px",
      m: "550px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["SF UI Display", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#fff",
        "main-black": "#121212",
        "pre-black": "#18232F",
        "tiny-black": "#323030",
        "bg-main": "#F3F6FB",
        "bg-main-sm": "#ECEFF4",
        grey: "#6A6E73",
        "grey-tiny": "#B3B9C4",
        "grey-soft": "#F9F7FD",
        "grey-light": "#86888A",
        "grey-dark": "#EDEEF2",
        "grey-middle": "#838F9F",
        alabaster: "#FAFAFA",
        blue: "#007DF6",
        "blue-dark": "#016CD3",
        "blue-light": "#DDEEFF",
        "pink-bg": "rgba(173, 145, 223, 0.08)",
      },
      fontSize: {
        sm: "0.8rem",
        m: "0.875rem", // 14
        base: "1rem", // 16
        xxxl: "2.5rem",
        lg: "1.125rem", // 18
        xl: "1.25rem", // 20
        l: "1.375rem",
        "1xl": "1.75rem", //28
        "3xl": "1.875rem", // 30
        "4xl": "2.375rem", // 38
      },
      lineHeight: {
        m: "140%",
        xxxl: "140",
        lg: " 1.75rem",
        xl: " 1.75rem",
        "3xl": "2.25rem",
        tight: "1.3",
      },
      spacing: {
        1080: "67.5rem",
        540: "33.75rem",
        910: "56.975rem",
        128: "32rem",
        144: "36rem",
      },
      width: {
        "45%": "45%", // 45%
        132: "8.26rem", // 132
        127: "7.93rem", // 127
      },
      maxWidth: {
        49: "49rem",
        132: "8.26rem", // 132
      },
      borderRadius: {
        20: "1.25rem",
        "4xl": "2rem",
        32: "2rem",
        40: "2.5rem",
      },
      boxShadow: {
        xl: "0px 20px 50px rgba(0, 0, 0, 0.1)",
        tinyCard: "0px 80px 100px rgba(0, 0, 0, 0.05)",
        normal: "0px -3.97408px 9.14039px -0.794816px rgba(0, 0, 0, 0.16)",
        s: "0px 0px 48.8663px 9.77327px rgba(0, 0, 0, 0.04)",
      },
    },
  },
};
