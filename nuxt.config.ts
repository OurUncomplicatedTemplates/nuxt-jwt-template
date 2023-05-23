// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        '@nuxt/devtools',
        '@nuxthq/ui',
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
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
