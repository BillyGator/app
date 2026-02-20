/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand Colors
        gator: {
          green: "#45B653",
          yellow: "#FFF212",
          red: "#C90010",
          black: "#000000",
        },
      },
      borderRadius: {
        xl: "1rem",
        lg: "0.875rem",
        md: "0.75rem",
        sm: "0.625rem",
        xs: "0.5rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "gator": "8px 8px 0 rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.15)",
        "gator-hover": "12px 12px 0 rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.2)",
        "card": "10px 10px 0 rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.12)",
        "card-hover": "16px 16px 0 #45B653, 0 12px 40px rgba(0,0,0,0.18)",
        "glow-green": "0 0 20px rgba(69, 182, 83, 0.5), 0 0 40px rgba(69, 182, 83, 0.3)",
        "glow-yellow": "0 0 20px rgba(255, 242, 18, 0.5), 0 0 40px rgba(255, 242, 18, 0.3)",
      },
      fontFamily: {
        display: ['"Luckiest Guy"', '"Changa One"', '"Bangers"', '"Arial Black"', 'cursive', 'sans-serif'],
        body: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(69, 182, 83, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(69, 182, 83, 0.8)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
