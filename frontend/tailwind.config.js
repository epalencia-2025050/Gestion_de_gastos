/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial del Sistema de Gestion de Gastos
        marino: {
          DEFAULT: '#0F2C4C',
          light: '#173F69',
          dark: '#091D33',
        },
        esmeralda: {
          DEFAULT: '#1E8A5D',
          light: '#25A873',
        },
        azulado: {
          DEFAULT: '#17A398',
          light: '#1FC4B6',
        },
        ambar: {
          DEFAULT: '#F5A623',
          light: '#F8BC57',
        },
        grisclaro: '#EEF1F4',
        carbon: '#2B2D33',

        // Alias 'primary' para compatibilidad con componentes existentes
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#17A398',
          600: '#1E8A5D',
          700: '#0F2C4C',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(160deg, #0F2C4C 0%, #12506B 45%, #17A398 100%)',
        'cta-gradient': 'linear-gradient(100deg, #1E8A5D 0%, #17A398 100%)',
      },
    },
  },
  plugins: [],
};
