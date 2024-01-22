import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens:{
      "xxs":"420px",
      "xs":"480x",
      "sm":"576px",
      "md":"768px",
      "lg":"992px",
      "xl":"1200px",
      "2xl":"1400px",
       "3xl":"1600px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        theme: 'hsla(252, 87%, 64%, 1)',
        success: 'hsl(140, 65%, 50%)',
        danger: 'hsl(360, 75%, 60%)',
        backgroundV1: 'hsl(var(--background-v1))',
        backgroundV2: 'hsl(var(--background-v2))',
        textV1: 'hsl(var(--text-v1))',
        textV2: 'hsl(var(--text-v2))',
        borderV1: 'hsl(var(--border-v1))',
        borderV2: 'hsl(var(--border-v2))',
      },
      borderRadius: {
        sm: "10px",
        md: "20px",
        lg: "30px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config