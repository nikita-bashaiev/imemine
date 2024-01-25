import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

const config = {
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '45rem',
        lg: '80rem',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
      },
      colors: {
        primary: 'oklch(var(--color-primary) / <alpha-value>)',
        secondary: 'oklch(var(--color-secondary) / <alpha-value>)',
        tertiary: 'oklch(var(--color-tertiary) / <alpha-value>)',
        surface: 'oklch(var(--color-surface) / <alpha-value>)',
      },
      gridColumn: {
        text: 'text',
        normal: 'normal',
        full: 'full',
      },
      maxWidth: {
        prose: '80ch',
      },
      gridTemplateColumns: {
        content: 'var(--grid-columns-content)',
      },
    },
  },
  plugins: [
    typography(),
    plugin(function ({ addVariant }) {
      addVariant('hover', '@media (hover: hover) {&:hover}');
    }),
  ],
} satisfies Config;
export default config;
