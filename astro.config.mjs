import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "vq908ksg",
    dataset: "production"
  }), react()],
  vite: {
    ssr: {
      noExternal: ['node_modules']
    }
  }
});