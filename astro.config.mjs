import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://perspektive-ukraine.com',
  base: '/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()]
});