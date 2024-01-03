import sfTypography from '@crearis/typography';
import { tailwindConfig } from '@crearis/vue/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@crearis/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
        xs: '376px'
      },
      zIndex: {
        60: '60',
        80: '80',
        100: '100',
      }
    },
  },
  plugins: [sfTypography],
} as Config;
