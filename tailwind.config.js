/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'crusta': {
          '50': '#fff5ed',
          '100': '#ffe8d4',
          '200': '#ffcda8',
          '300': '#ffaa71',
          '400': '#ff8040',
          '500': '#fe5711',
          '600': '#ef3c07',
          '700': '#c62908',
          '800': '#9d230f',
          '900': '#7e1f10',
          '950': '#440c06',
        },
      },
    },
  },
  plugins: [],
}

