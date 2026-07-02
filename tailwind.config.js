/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta identitaria: ciencia + naturaleza, sin saturaciones artificiales
        bosque: {
          50: "#F1F4F0",
          100: "#E1E8DE",
          200: "#C3D1BD",
          300: "#9AAE8E",
          400: "#6E7B4F",
          500: "#4B5C3A",
          600: "#334630",
          700: "#25352A",
          800: "#1C2A22",
          900: "#14201A",
        },
        arena: {
          50: "#FBFAF6",
          100: "#F5F1E6",
          200: "#ECE5D2",
          300: "#DED2B6",
        },
        piedra: {
          400: "#8C897E",
          500: "#6B6A63",
          600: "#4E4D47",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        suave: "0 12px 32px -16px rgba(28, 42, 34, 0.18)",
        tarjeta: "0 8px 24px -12px rgba(28, 42, 34, 0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "textura-papel":
          "radial-gradient(circle at 1px 1px, rgba(28,42,34,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
