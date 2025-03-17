/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   // Explicitly defining layer order to ensure utilities override base
   layers: {
    theme: {},
    base: {},
    components: {},
    utilities: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        text: "var(--text)",
        background: "var(--background)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
        brand: ["var(--font-audio-wide)", "monospace"],
        //  direct class names
        'audiowide': ["var(--font-audio-wide)", "monospace"],
        'nunito': ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
      },
      fontWeight: {
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "shimmer-slide": "shimmerSlide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spinAround calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        spinAround: {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        shimmerSlide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        }
      },
    },
  },
  plugins: [],
};