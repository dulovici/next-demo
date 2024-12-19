/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints for laptop, tablet, and mobile
        sm: "480px", // Small mobile devices
        md: "768px", // Tablets
        lg: "1024px", // Small laptops
        xl: "1280px", // Large laptops/desktops
        "2xl": "1440px", // Extra-large desktops
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5840CE", // Purple
        secondary: "#24156F", // Dark Purple
        accent: "#E7E3F8", // Light Purple
        muted: "#424242CC", // Muted Gray
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};