// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://www.armandoborge.com',
    devToolbar: {
        enabled: false,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap({
            filter: (page) => page !== 'https://www.armandoborge.com/success',
        }),
    ],
})
