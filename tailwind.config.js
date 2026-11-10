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
        // Cores com os nomes amigáveis que usamos no novo design baseado na sua foto
        'brand-dark': '#192524',      // Verde escuro quase preto
        'brand-primary': '#3C5759',   // Verde petróleo
        'brand-secondary': '#959D90', // Verde acinzentado
        'brand-light': '#D1EBDB',     // Verde menta claro
        'brand-bg': '#efece9',        // Fundo suave que já estava no seu base-100

        // Mantidas as suas variáveis antigas caso outros componentes antigos dependam delas
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
