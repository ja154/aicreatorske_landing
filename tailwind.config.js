module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Terracotta Trust Anchor
        primary: {
          50: "#FDF5F0",
          100: "#FAEBD7", // antique-white
          200: "#F4D4B8",
          300: "#EDBF99",
          400: "#E6A87A",
          500: "#D2691E", // chocolate
          600: "#B8591A",
          700: "#9E4916",
          800: "#843912",
          900: "#6A290E",
          DEFAULT: "#D2691E", // chocolate
        },
        
        // Secondary Colors - Supporting Warmth
        secondary: {
          50: "#FBF7F2",
          100: "#F7EFE5",
          200: "#EFDFCB",
          300: "#E7CFB1",
          400: "#DFBF97",
          500: "#CD853F", // peru
          600: "#B67236",
          700: "#9F5F2D",
          800: "#884C24",
          900: "#71391B",
          DEFAULT: "#CD853F", // peru
        },
        
        // Accent Colors - Electric Blue for Conversion
        accent: {
          50: "#F0F8FF", // alice-blue
          100: "#E1F1FF",
          200: "#C3E3FF",
          300: "#A5D5FF",
          400: "#87C7FF",
          500: "#1E90FF", // dodger-blue
          600: "#1A7DE6",
          700: "#166ACC",
          800: "#1257B3",
          900: "#0E4499",
          DEFAULT: "#1E90FF", // dodger-blue
        },
        
        // Background Colors
        background: "#FFF8DC", // cornsilk
        surface: "#F5E6D3", // beige
        
        // Text Colors
        text: {
          primary: "#2F1B14", // dark-brown
          secondary: "#8B4513", // saddle-brown
        },
        
        // Status Colors
        success: "#FFD700", // gold
        warning: "#FF6347", // tomato
        error: "#DC143C", // crimson
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
        'cta': '0 4px 12px rgba(30, 144, 255, 0.15)',
        'cta-hover': '0 6px 16px rgba(30, 144, 255, 0.25)',
        'testimonial': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'terracotta': '0 4px 12px rgba(210, 105, 30, 0.15)',
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