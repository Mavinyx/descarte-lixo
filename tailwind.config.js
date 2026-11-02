/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': 'var(--primary)',
        'custom-secondary': 'var(--secondary)',
        'custom-default': 'var(--default)',
        'custom-tertiary': 'var(--tertiary)',
        'custom-quaternary': 'var(--quaternary)',
        'custom-quinary': 'var(--quinary)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        tema: {
          primary: '#3c5759',
          secondary: '#d1ebdb',
          accent: '#959d90',
          neutral: '#192524',
          'base-100': '#efece9',
          info: '#3c5759',
          success: '#d1ebdb',
          warning: '#959d90',
          error: '#192524',
        },
      },
    ],
    darkTheme: 'light',
  },
};