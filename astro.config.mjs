import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://JuanJoII.github.io',
  base: '/WebSikuani/',
  vite: {
    plugins: [tailwind()],
  },
});
