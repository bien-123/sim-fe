import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
    integrations: [tailwind(), react()],
    components: {
        fileExtensions: ['astro', 'jsx', 'tsx', 'md', 'ts'],
    },
    image: {
        domains: ['astro.build'],
    },
});
