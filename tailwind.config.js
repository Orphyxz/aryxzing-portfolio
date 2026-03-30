/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050816",
        surface: "#0c1328",
        "surface-2": "#101933",
        line: "rgba(255,255,255,0.1)",
        glow: {
          amber: "#f6b975",
          cyan: "#5dd2ff",
          violet: "#8577ff",
        },
      },
      fontFamily: {
        heading: ['"Sora Variable"', "sans-serif"],
        body: ['"Manrope Variable"', "sans-serif"],
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px rgba(6,12,34,0.55)",
        float: "0 24px 70px rgba(4,7,20,0.65)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        pulseSoft: "pulseSoft 6s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
