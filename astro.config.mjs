import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://idamatre.no',
  output: "server",
  integrations: [react()]
})