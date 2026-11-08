/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0048A8',
          deep: '#071F44',
          footer: '#04122B',
          bright: '#2F6FDE',
        },
        tint: '#EEF3FB',
        line: '#D8E2F2',
        bodytext: {
          DEFAULT: '#14243D',
          muted: '#5B6B82',
        },
        muted: '#5B6B82',
        cta: {
          DEFAULT: '#C9A24B',
          hover: '#E6CD85',
        },
        slate: {
          muted: '#7A8AA3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
