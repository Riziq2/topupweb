module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric Blue
        primary: {
          DEFAULT: "#00D9FF", // electric-blue
          50: "#E6F9FF", // electric-blue-50
          100: "#CCF3FF", // electric-blue-100
          200: "#99E7FF", // electric-blue-200
          300: "#66DBFF", // electric-blue-300
          400: "#33CFFF", // electric-blue-400
          500: "#00D9FF", // electric-blue-500
          600: "#00AED9", // electric-blue-600
          700: "#0082B3", // electric-blue-700
          800: "#00568C", // electric-blue-800
          900: "#002A66", // electric-blue-900
        },
        // Secondary Colors - Deep Gaming Background
        secondary: {
          DEFAULT: "#1A1A2E", // deep-gaming-bg
          50: "#F2F2F5", // deep-gaming-bg-50
          100: "#E6E6EB", // deep-gaming-bg-100
          200: "#CCCCDB", // deep-gaming-bg-200
          300: "#B3B3CB", // deep-gaming-bg-300
          400: "#9999BB", // deep-gaming-bg-400
          500: "#808099", // deep-gaming-bg-500
          600: "#666677", // deep-gaming-bg-600
          700: "#4D4D55", // deep-gaming-bg-700
          800: "#333344", // deep-gaming-bg-800
          900: "#1A1A2E", // deep-gaming-bg-900
        },
        // Accent Colors - Neon Green
        accent: {
          DEFAULT: "#00FF88", // neon-green
          50: "#E6FFF4", // neon-green-50
          100: "#CCFFE9", // neon-green-100
          200: "#99FFD4", // neon-green-200
          300: "#66FFBE", // neon-green-300
          400: "#33FFA9", // neon-green-400
          500: "#00FF88", // neon-green-500
          600: "#00D973", // neon-green-600
          700: "#00B35E", // neon-green-700
          800: "#008C49", // neon-green-800
          900: "#006634", // neon-green-900
        },
        // Background Colors - Dark Gaming Canvas
        background: {
          DEFAULT: "#0F0F23", // dark-gaming-canvas
          50: "#F1F1F5", // dark-gaming-canvas-50
          100: "#E3E3EB", // dark-gaming-canvas-100
          200: "#C7C7D7", // dark-gaming-canvas-200
          300: "#ABABC3", // dark-gaming-canvas-300
          400: "#8F8FAF", // dark-gaming-canvas-400
          500: "#73739B", // dark-gaming-canvas-500
          600: "#575787", // dark-gaming-canvas-600
          700: "#3B3B73", // dark-gaming-canvas-700
          800: "#1F1F5F", // dark-gaming-canvas-800
          900: "#0F0F23", // dark-gaming-canvas-900
        },
        // Surface Colors - Card Separation
        surface: {
          DEFAULT: "#16213E", // card-separation
          50: "#F2F4F7", // card-separation-50
          100: "#E5E9F0", // card-separation-100
          200: "#CBD3E0", // card-separation-200
          300: "#B1BDD1", // card-separation-300
          400: "#97A7C1", // card-separation-400
          500: "#7D91B2", // card-separation-500
          600: "#637BA2", // card-separation-600
          700: "#496593", // card-separation-700
          800: "#2F4F83", // card-separation-800
          900: "#16213E", // card-separation-900
        },
        // Status Colors
        success: "#00FF88", // neon-green
        warning: "#FF6B35", // orange-500
        error: "#FF4757", // red-500
        // Text Colors
        "text-primary": "#FFFFFF", // white
        "text-secondary": "#B8BCC8", // gray-400
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Headlines
        inter: ['Inter', 'sans-serif'], // Body text
        rajdhani: ['Rajdhani', 'sans-serif'], // CTAs
        exo: ['Exo 2', 'sans-serif'], // Accents
      },
      boxShadow: {
        'cta': '0 4px 20px rgba(0, 217, 255, 0.3)',
        'cta-hover': '0 6px 25px rgba(0, 255, 136, 0.4)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 4px 15px rgba(0, 217, 255, 0.2)',
        'focus': '0 0 0 2px rgba(0, 217, 255, 0.2)',
      },
      borderColor: {
        'field': 'rgba(0, 217, 255, 0.3)',
        'cta': '#00FF88',
        'card': 'rgba(0, 217, 255, 0.2)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}