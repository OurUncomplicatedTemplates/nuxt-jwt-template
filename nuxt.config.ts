// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/devtools',
    ],

    devtools: {
        enabled: true
    },

    typescript: {
        strict: true
    },

    vite: {
        server: {
            hmr: {
                port: 5173
            }
        }
    }
})
