module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Bold Purple to Magenta
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#9333ea",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          DEFAULT: "#9333ea",
        },
        
        // Secondary: Vibrant Magenta
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f8a3d8",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#5f0f40",
          DEFAULT: "#ec4899",
        },
        
        // Accent: Electric Cyan
        accent: {
          50: "#ecf9ff",
          100: "#cff3ff",
          200: "#a5e8ff",
          300: "#67d9ff",
          400: "#06b6d4",
          500: "#0891b2",
          600: "#0e7490",
          700: "#155e75",
          800: "#164e63",
          900: "#0f2f46",
          DEFAULT: "#06b6d4",
        },
        
        // Background Colors
        background: "#ffffff",
        surface: "#f9f5ff",
        
        // Text Colors
        text: {
          primary: "#0f172a",
          secondary: "#475569",
        },
        
        // Status Colors  
        success: "#84cc16",
        warning: "#f97316",
        error: "#ef4444",
      },
      
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      
      fontWeight: {
        'headline-semibold': '600',
        'headline-bold': '700',
        'headline-extrabold': '800',
        'body-normal': '400',
        'body-medium': '500',
        'cta-bold': '700',
        'accent-semibold': '600',
      },
      
      boxShadow: {
        'cta': '0 0 20px rgba(147, 51, 234, 0.3)',
        'cta-hover': '0 0 30px rgba(236, 72, 153, 0.4)',
        'testimonial': '0 8px 16px rgba(0, 0, 0, 0.08)',
        'glow-purple': '0 0 30px rgba(147, 51, 234, 0.4)',
        'glow-magenta': '0 0 30px rgba(236, 72, 153, 0.4)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
      },
      
      borderWidth: {
        '3': '3px',
      },
      
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      
      animation: {
        'counter': 'counter 300ms ease-in-out',
        'fade-in': 'fadeIn 250ms ease-in-out',
      },
      
      keyframes: {
        counter: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}