import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://IljaAvadiev.github.io',
  base: '/perspektive-ukraine',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()]
});