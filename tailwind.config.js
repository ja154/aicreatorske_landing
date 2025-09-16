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
        // Primary Colors
        primary: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
          DEFAULT: "#000000",
        },
        
        // Secondary Colors
        secondary: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
          DEFAULT: "#4a5568",
        },
        
        // Accent Colors
        accent: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
          DEFAULT: "#a0aec0",
        },
        
        // Background Colors
        background: "#ffffff",
        surface: "#f7fafc",
        
        // Text Colors
        text: {
          primary: "#000000",
          secondary: "#4a5568",
        },
        
        // Status Colors
        success: "#2d3748",
        warning: "#718096",
        error: "#1a202c",
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
        'cta': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 6px 16px rgba(0, 0, 0, 0.15)',
        'testimonial': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'terracotta': '0 4px 12px rgba(0, 0, 0, 0.1)',
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