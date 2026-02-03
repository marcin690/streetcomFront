/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Custom colors from Figma
        yellow: {
          500: "#FDD80A",
        },
        purple: {
          500: "#F02F8D",
        },
        violet: {
          500: "#B700FF",
        },
        // Dark background colors
        dark: {
          950: "#030712", // gray-950 for sidebar
          900: "#0D0D0D",
          800: "#1A1A1A",
          700: "#2D2D2D",
        },
        // Coal palette from Figma
        coal: {
          900: "#111319",
        },
        // Semantic colors from Figma
        "light-gray": "#C7CEE5",
      },
      fontFamily: {
        sans: ["Proxima Nova", "system-ui", "sans-serif"],
        heading: ["All Round Gothic", "sans-serif"],
      },
      // Global font sizes - używaj tych klas w całym projekcie
      fontSize: {
        // Body text
        "body-sm": ["0.875rem", { lineHeight: "1.5" }], // 14px
        body: ["1rem", { lineHeight: "1.5" }], // 16px - nav links
        "body-lg": ["1.125rem", { lineHeight: "1.5" }], // 18px - buttons
        // Headings
        "heading-sm": ["1.25rem", { lineHeight: "1.3" }], // 20px
        heading: ["1.5rem", { lineHeight: "1.3" }], // 24px
        "heading-lg": ["2rem", { lineHeight: "1.2" }], // 32px
        "heading-xl": ["2.5rem", { lineHeight: "1.2" }], // 40px
        "heading-2xl": ["3rem", { lineHeight: "1.1" }], // 48px
        "heading-3xl": ["3.5rem", { lineHeight: "1.1" }], // 56px
        "heading-hero": ["4rem", { lineHeight: "1.1" }], // 64px
        // Small/labels
        label: ["0.75rem", { lineHeight: "1.5" }], // 12px
        "label-sm": ["0.625rem", { lineHeight: "1.5" }], // 10px
      },
      backgroundImage: {
        // Main gradient: yellow -> purple -> violet
        "gradient-main":
          "linear-gradient(135deg, #FDD80A 0%, #F02F8D 50%, #B700FF 100%)",
        "gradient-main-horizontal":
          "linear-gradient(90deg, #FDD80A 0%, #F02F8D 50%, #B700FF 100%)",
        "gradient-main-vertical":
          "linear-gradient(180deg, #FDD80A 0%, #F02F8D 50%, #B700FF 100%)",
        // Hero gradients from Figma
        "gradient-text":
          "linear-gradient(to right, #FACC15, #EC4899 24%, #C026D3)",
        "gradient-btn":
          "linear-gradient(270deg, #EC4899 0%, #D946EF 42%, #C026D3 100%)",
        "gradient-border":
          "linear-gradient(50deg, #FACC15, #EC4899)",
        "gradient-card-border":
          "linear-gradient(246deg, #FACC15 0%, #C026D3 68%, #EC4899 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      // Custom spacing if needed
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      // Z-index for layers
      zIndex: {
        header: "100",
        sidebar: "90",
        modal: "200",
        dropdown: "150",
      },
    },
  },
  plugins: [],
};
