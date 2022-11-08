import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://perspektive-ukraine.de',
  vite: {
    assetsInclude: ['**/*.JPG']
  },
  base: '/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), sitemap()]
});