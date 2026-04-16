import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://JuanJoII.github.io', // Actualizar con tu dominio final de GitHub Pages
  base: '/WebSikuani', // Cambiar a '/nombre-del-repo/' si el despliegue es en un subdirectorio
  vite: {
    plugins: [tailwind()],
  },
});
