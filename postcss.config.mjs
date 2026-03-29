const config = {
  plugins: {
    "@tailwindcss/postcss": {
      colors: {
        background: '#0a0a0a',      // bg-background
        foreground: '#ededee',       // text-foreground
        primary: {
          DEFAULT: '#3b82f6',        // biru modern
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#1f1f1f',
          foreground: '#d4d4d4'
        },
        border: '#2a2a2a',
        card: '#0f0f0f',
        accent: {
          DEFAULT: '#2d2d2d',
          foreground: '#ffffff'
        }
      }
    },
  },
};

export default config;
