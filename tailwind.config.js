/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial":
          "radial-gradient(circle 550px at 50% 80%, rgba(62,147,252,0.77) 24%, rgba(239,183,192,0.64) 91.2%)",
      },
      colors: {
        "custom-blue": "rgba(62,147,252,0.77)", // permet d'ajouter une couleur personnalisée RGBA à Tailwind
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F69A27",
          secondary: "#f6d860",
          warning: "#6C5130",
          "warning-content": "#EC9517",
          accent: "#89488B",
          "accent-content": "#FFFFFF",
          neutral: "#9A9A9A",
          "neutral-content": "#A2A2A2",
          "base-100": "#1E1E1E",
          "base-200": "#323232",
          "base-300": "#464646",
          success: "#2D613A",
          "success-content": "#43D74B",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
